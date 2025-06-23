const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const { customerName, items } = req.body;
  const newOrder = new Order({ customerName, items });
  await newOrder.save();
  res.status(201).json(newOrder);
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find().populate("items.productId", "name price");
  res.json(orders);
};

exports.updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const order = await Order.findById(id);
  order.status = status;
  await order.save();
  res.json(order);
};

exports.getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "items.productId",
    "name price"
  );
  if (!order) return res.status(404).json({ msg: "Order not found" });
  res.json(order);
};
