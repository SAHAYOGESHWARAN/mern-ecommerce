
const express = require('express');
const { createReview } = require('../controllers/reviewController');
const { isAuthenticated } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', isAuthenticated, createReview);

module.exports = router;
