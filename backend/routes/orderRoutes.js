
const express = require('express');
const { createOrder, getOrders } = require('../controllers/orderController');
const { isAuthenticated } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', isAuthenticated, createOrder);
router.get('/', isAuthenticated, getOrders);

module.exports = router;
