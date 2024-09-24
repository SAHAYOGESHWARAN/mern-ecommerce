
const express = require('express');
const { getProducts, createProduct } = require('../controllers/productController');
const { isAuthenticated } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getProducts);
router.post('/', isAuthenticated, createProduct);

module.exports = router;
