require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const PRODUCTS = require('./config/products');

const app = express();
const PORT = process.env.PORT || 4242;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/config', express.static(path.join(__dirname, 'config')));

app.get('/api/products', (req, res) => {
  res.json({ products: PRODUCTS });
});

app.get('/api/hat-image', (req, res) => {
  const colorHex = req.query.color || '#121216';
  const name = req.query.name || '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#121216"/><path d="M 100 150 Q 200 80 300 150 Q 200 220 100 150 Z" fill="${colorHex}" stroke="#D4AF37" stroke-width="2"/><text x="200" y="260" font-family="sans-serif" font-size="14" fill="#A1A1AA" text-anchor="middle">${name}</text></svg>`;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
