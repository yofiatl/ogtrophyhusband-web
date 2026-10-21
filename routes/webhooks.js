require('dotenv').config();
const express = require('express');
const router = express.Router();
const { stripe } = require('../connectors/stripe');
const { createPrintfulOrder } = require('../connectors/printful');

router.post('/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event;
  try {
    if (webhookSecret && sig) {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } else {
      event = JSON.parse(req.body.toString());
    }
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    try {
      const shipping = session.shipping_details;
      if (!shipping) return res.json({ received: true, warning: 'No shipping details' });
      const recipient = {
        name: shipping.name,
        address1: shipping.address.line1,
        address2: shipping.address.line2 || '',
        city: shipping.address.city,
        state_code: shipping.address.state,
        country_code: shipping.address.country,
        zip: shipping.address.postal_code,
        email: session.customer_details ? session.customer_details.email : ''
      };
      const items = session.metadata && session.metadata.items_json ? JSON.parse(session.metadata.items_json) : [];
      const printfulOrder = await createPrintfulOrder(recipient, items, session.id);
      return res.json({ received: true, printfulOrderId: printfulOrder.id, status: printfulOrder.status });
    } catch (err) {
      return res.status(200).json({ received: true, error: err.message });
    }
  }
  res.json({ received: true });
});

router.post('/printful', express.json(), (req, res) => {
  res.json({ success: true });
});

module.exports = router;
