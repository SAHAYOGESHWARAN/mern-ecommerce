
const Wishlist = require('../models/Wishlist');

exports.addToWishlist = async (req, res) => {
  const { productId } = req.body;
  const wishlist = await Wishlist.findOne({ user: req.user._id });
  
  if (wishlist) {
    wishlist.products.push(productId);
    await wishlist.save();
  } else {
    const newWishlist = new Wishlist({ user: req.user._id, products: [productId] });
    await newWishlist.save();
  }
  
  res.status(201).json({ message: 'Product added to wishlist' });
};

exports.getWishlist = async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user._id }).populate('products');
  res.status(200).json(wishlist);
};
