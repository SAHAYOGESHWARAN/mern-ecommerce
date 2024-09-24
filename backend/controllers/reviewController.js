
const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  const { productId, rating, comment } = req.body;
  const review = new Review({ product: productId, user: req.user._id, rating, comment });
  
  try {
    await review.save();
    res.status(201).json({ message: 'Review added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
