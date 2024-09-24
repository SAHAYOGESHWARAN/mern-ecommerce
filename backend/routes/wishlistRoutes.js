
const express = require('express');
const { addToWishlist, getWishlist } = require('../controllers/wishlistController');
const { isAuthenticated } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', isAuthenticated, addToWishlist);
router.get('/', isAuthenticated, getWishlist);

module.exports = router;
