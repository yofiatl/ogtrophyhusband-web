const STORE_ID = process.env.PRINTFUL_STORE_ID || '18059840';
const API_KEY = process.env.PRINTFUL_API_KEY;

/**
 * Fetches live Printful products, variants, and images for Store ID 18059840.
 */
async function getProducts() {
  const headers = {
    'X-PF-Store-Id': STORE_ID
  };
  if (API_KEY) {
    headers['Authorization'] = `Bearer ${API_KEY}`;
  }

  try {
    const response = await fetch(`https://api.printful.com/store/products?store_id=${STORE_ID}`, { headers });
    if (!response.ok) {
      throw new Error(`Printful API HTTP error: ${response.status}`);
    }
    const data = await response.json();
    const items = data.result || [];

    const products = await Promise.all(
      items.map(async (item) => {
        try {
          const detailRes = await fetch(`https://api.printful.com/store/products/${item.id}?store_id=${STORE_ID}`, { headers });
          const detailData = await detailRes.json();
          const syncProduct = detailData.result?.sync_product || item;
          const syncVariants = detailData.result?.sync_variants || [];

          const variants = syncVariants.map((v) => {
            const previewFile = v.files?.find((f) => f.type === 'preview') || v.files?.[0];
            const colorName = v.color || extractColor(v.name);
            return {
              id: v.id,
              external_id: v.external_id,
              name: v.name,
              color: colorName,
              price: parseFloat(v.retail_price || 0),
              image: previewFile ? previewFile.preview_url : item.thumbnail_url,
              sku: v.sku
            };
          });

          return {
            id: syncProduct.id || item.id,
            external_id: syncProduct.external_id || item.external_id,
            name: syncProduct.name || item.name,
            thumbnail: item.thumbnail_url || syncProduct.thumbnail_url,
            variants: variants
          };
        } catch (err) {
          console.error(`Error fetching detail for product ${item.id}:`, err);
          return {
            id: item.id,
            external_id: item.external_id,
            name: item.name,
            thumbnail: item.thumbnail_url,
            variants: []
          };
        }
      })
    );

    return products;
  } catch (error) {
    console.error('Error fetching Printful products:', error);
    return [];
  }
}

function extractColor(variantName) {
  if (!variantName) return 'Default';
  if (variantName.includes('/')) {
    const parts = variantName.split('/');
    return parts[parts.length - 1].trim();
  }
  if (variantName.includes('-')) {
    const parts = variantName.split('-');
    return parts[parts.length - 1].trim();
  }
  return variantName;
}

module.exports = {
  getProducts,
  STORE_ID
};
