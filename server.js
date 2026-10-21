/**
 * OG Trophy Husband - Production Express Server
 * 
 * Standalone, self-hosted backend replacing Shopify.
 * Connects directly to:
 * - Stripe (Hosted Checkout + Webhooks)
 * - Printful (REST API POD automated fulfillment)
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const PRODUCTS = require('./config/products');
const { createCheckoutSession } = require('./connectors/stripe');
const webhooksRouter = require('./routes/webhooks');

const app = express();
const PORT = process.env.PORT || 4242;

// 1. CORS Configuration
app.use(cors());

// 2. Webhooks Route (Registered BEFORE express.json() because St/**
 * OG Trophy Husband - Production Express Server
 *
 * Standalone, self-hosted backend replacing Shopify.
 * Connects directly to:
 * - Stripe (Hosted Checkout + Webhooks)
 * - Printful (REST API POD automated fulfillment)
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const PRODUCTS = require('./config/products');
const printfulConnector = require('./connectors/printful');
const { createCheckoutSession } = require('./connectors/stripe');
const webhooksRouter = require('./routes/webhooks');

const app = express();
const PORT = process.env.PORT || 4242;

// 1. CORS Configuration
app.use(cors());

// 2. Webhooks Route (Registered BEFORE express.json() because Stripe webhook needs raw stream)
app.use('/api/webhooks', webhooksRouter);

// 3. Body Parsers for standard API routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. Serve Static Frontend Files
app.use(express.static(path.join(__dirname, 'public')));

// 5. REST API: Get Product Catalog
app.get('/api/products', async (req, res) => {
  try {
    const liveProducts = await printfulConnector.getProducts();
    if (liveProducts && liveProducts.length > 0) {
      return res.json({ products: liveProducts });
    }
  } catch (err) {
    console.error('Error fetching live Printful products, falling back to local catalog:', err);
  }
  res.json({
    products: Object.values(PRODUCTS)
  });
});

// 6. REST API: Get Single Product
app.get('/api/products/:id', async (req, res) => {
  try {
    const liveProducts = await printfulConnector.getProducts();
    const liveProd = liveProducts.find((p) => String(p.id) === String(req.params.id) || String(p.external_id) === String(req.params.id));
    if (liveProd) {
      return res.json({ product: liveProd });
    }
  } catch (err) {
    console.error('Error fetching single product from Printful:', err);
  }

  const product = PRODUCTS[req.params.id];
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json({ product });
});

// 7. REST API: Create Stripe Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { items, success_url, cancel_url } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'At least one item is required.' });
    }

    const session = await createCheckoutSession({
      items,
      successUrl: success_url || `${req.protocol}://${req.get('host')}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: cancel_url || `${req.protocol}://${req.get('host')}/#catalog`
    });

    res.json({ url: session.url, id: session.id });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({ error: error.message || 'Failed to create checkout session.' });
  }
});

// 8. Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Catch-all route to serve SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`=================================`);
  console.log(`OG Trophy Husband Server Running`);
  console.log(`Port: ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`=================================`);
});ripe webhook needs raw stream)
app.use('/api/webhooks', webhooksRouter);

// 3. Body Parsers for standard API routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. Serve Static Frontend Files
app.use(express.static(path.join(__dirname, 'public')));

// 5. REST API: Get Product Catalog
app.get('/api/products', (req, res) => {
  res.json({
    products: Object.values(PRODUCTS)
  });
});

// 6. REST API: Get Single Product
app.get('/api/products/:id', (req, res) => {
  const product = PRODUCTS[req.params.id];
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

// 7. REST API: Create Stripe Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { items, customerEmail } = req.body;
    if (!items || !items.length) {
      return res.status(400).json({ error: 'Cart items are required' });
    }

    const session = await createCheckoutSession(items, customerEmail);
    res.json({
      url: session.url,
      sessionId: session.sessionId
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({
      error: error.message || 'Internal server error creating checkout session'
    });
  }
});

// 8. REST API: Simulation / Connector Status Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    stripeConnected: !!process.env.STRIPE_SECRET_KEY,
    printfulConnected: !!process.env.PRINTFUL_API_TOKEN,
    catalogCount: Object.keys(PRODUCTS).length
  });
});

// 9. Client-Side SPA Fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🏆 OG Trophy Husband Self-Hosted Storefront Running`);
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`💳 Stripe Checkout API: Ready`);
  console.log(`📦 Printful Automation: Ready`);
  console.log(`====================================================`);
});
