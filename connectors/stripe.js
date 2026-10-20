require('dotenv').config();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const products = require('../config/products');

async function createCheckoutSession(cartItems, customerEmail) {
  const lineItems = (cartItems || []).map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name || (products[item.id] && products[item.id].name) || 'Product',
      },
      unit_amount: 4444,
    },
    quantity: item.quantity || 1,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    customer_email: customerEmail,
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'GB', 'AU', 'NZ'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: 'usd',
          },
          display_name: 'Free Shipping',
        },
      },
    ],
    metadata: {
      items_json: typeof cartItems === 'string' ? cartItems : JSON.stringify(cartItems),
    },
  });

  return session;
}

module.exports = {
  stripe,
  createCheckoutSession,
};
