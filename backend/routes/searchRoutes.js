
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.get('/', async (req, res) => {
  const { q } = req.query;
  const products = await Product.find({ name: new RegExp(q, 'i') });
  res.status(200).json(products);
});

module.exports = router;
