
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { products, total } = req.body;
  const newOrder = new Order({
    user: req.user._id,
    products,
    total,
  });
  
  try {
    await newOrder.save();
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('products.product');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
