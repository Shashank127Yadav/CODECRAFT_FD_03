const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  const { category, sort } = req.query;

  let filter = {};
  if (category) filter.category = category;

  let sortOption = {};
  if (sort === "price_asc") sortOption.price = 1;
  else if (sort === "price_desc") sortOption.price = -1;

  const products = await Product.find(filter).sort(sortOption);
  res.json(products);
};

exports.addProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
};

exports.addReview = async (req, res) => {
  const { id } = req.params;
  const { user, rating, comment } = req.body;
  const product = await Product.findById(id);
  product.reviews.push({ user, rating, comment });
  await product.save();
  res.json(product);
};
