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

app.get('/api/products', (req, res) => {
  res.json({ products: PRODUCTS });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
