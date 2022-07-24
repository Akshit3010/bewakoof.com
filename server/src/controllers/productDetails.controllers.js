const Product = require("../models/product.model");
const User = require("../models/user.model");

const addToCart = async (req, res) => {
  const { id } = req.params;
  const { productId, size } = req.body;

  let UserData;
  let productData;

  try {
    productData = await Product.findById(productId);
    productData.sizes = size;
    console.log(productData);
    UserData = await User.findByIdAndUpdate(id, {
      $push: { mybag: productData },
    });
    return res.status(200).json({ productData });
  } catch (err) {
    return res.status(501).json({ err: err.message });
  }
};

module.exports = {
  addToCart,
};
