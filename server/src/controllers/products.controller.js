const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  const { category } = req.params;
  const prod = await Product.find({ category });
  res.status(200).send(prod);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const prod = await Product.find({ _id: id });
  res.status(200).send(prod);
};

const postProducts = async (req, res) => {
  const result = await Product.insertMany();
  res.status(200).send(result);
};

module.exports = { getProducts, postProducts, getProduct };
