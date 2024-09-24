
const express = require('express');
const { createOrder, getUserOrders } = require('../controllers/orderController');
const { isAuthenticated } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', isAuthenticated, createOrder);
router.get('/', isAuthenticated, getUserOrders);

module.exports = router;
