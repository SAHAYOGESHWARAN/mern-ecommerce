
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const order = new Order({
      user: req.user.id,
      products: req.body.products,
      totalAmount: req.body.totalAmount
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('products.productId');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
