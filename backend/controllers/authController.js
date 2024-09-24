
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const registerUser = (req, res) => {
    // Logic for user registration
    res.status(200).json({ message: 'User registered successfully!' });
};

const loginUser = (req, res) => {
    // Logic for user login
    res.status(200).json({ message: 'User logged in successfully!' });
};

module.exports = {
    registerUser,
    loginUser,
};

