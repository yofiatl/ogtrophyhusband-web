require('dotenv').config();
const Stripe = require('stripe');
const PRODUCTS = require('../config/products');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');

async function createCheckoutSession(cartItems, customerEmail = null) {
  if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
    throw new Error('Cart cannot be empty');
  }
  const lineItems = [];
  const metadataOrderItems = [];
  for (const item of cartItems) {
    const product = PRODUCTS[item.id];
    if (!product) throw new Error(`Invalid product ID: ${item.id}`);
    const qty = Math.max(1, parseInt(item.quantity, 10) || 1);
    const selectedColor = item.color && product.variants && product.variants[item.color]
      ? item.color : Object.keys(product.variants || {})[0] || 'Default';
    const resolvedVariantId = (product.variants && product.variants[selectedColor])
      || item.syncVariantId || product.printfulSyncVariantId;
    const unitAmountCents = Math.round(product.price * 100);
    lineItems.push({
      price_data: {
        currency: product.currency || 'usd',
        product_data: {
          name: `${product.title} (${selectedColor})`,
          description: `${product.chassis} • Color: ${selectedColor}`,
          images: product.images,
          metadata: { productId: product.id, color: selectedColor, printfulSyncVariantId: String(resolvedVariantId) }
        },
        unit_amount: unitAmountCents
      },
      quantity: qty
    });
    metadataOrderItems.push({
      id: product.id,
      color: selectedColor,
      sync_variant_id: String(resolvedVariantId),
      quantity: qty,
      title: `${product.title} (${selectedColor})`
    });
  }
  const frontendUrl = (process.env.FRONTEND_URL || process.env.BASE_URL || 'https://www.ogtrophyhusband.com').replace(/\/$/, '');
  const sessionConfig = {
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: lineItems,
    shipping_address_collection: { allowed_countries: ['US', 'CA', 'GB', 'AU', 'NZ'] },
    shipping_options: [{
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: { amount: 0, currency: 'usd' },
        display_name: 'Free Standard Shipping (Printful Direct)',
        delivery_estimate: {
          minimum: { unit: 'business_day', value: 3 },
          maximum: { unit: 'business_day', value: 7 }
        }
      }
    }],
    metadata: { order_source: 'ogtrophyhusband-web', items_json: JSON.stringify(metadataOrderItems) },
    success_url: `${frontendUrl}/?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${frontendUrl}/?checkout=canceled`
  };
  if (customerEmail) sessionConfig.customer_email = customerEmail;
  const session = await stripe.checkout.sessions.create(sessionConfig);
  return { url: session.url, sessionId: session.id };
}

module.exports = { stripe, createCheckoutSession };
