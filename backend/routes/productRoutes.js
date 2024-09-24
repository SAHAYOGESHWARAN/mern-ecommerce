

const express = require('express');
const { createProduct, getAllProducts, getProductById } = require('../controllers/productController');
const { isAuthenticated } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', isAuthenticated, createProduct); // Auth required for adding a product
router.get('/', getAllProducts);  // No auth required for fetching products
router.get('/:id', getProductById);  // Fetch product by ID

module.exports = router;
