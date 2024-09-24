const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// Define the POST route for registration
router.post('/register', registerUser);

// Define the POST route for login
router.post('/login', loginUser);

module.exports = router;
