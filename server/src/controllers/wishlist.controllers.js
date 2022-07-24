const User = require("../models/user.model");
const Product = require("../models/product.model");

const getWishlistProducts = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);

  let UserData;
  let productData;
  try {
    UserData = await User.findById(id).lean().exec();
    productData = UserData.wishlist;
    return res.status(200).json({ productData });
  } catch (err) {
    return res.status(503).json({ err: err.message });
  }
};

module.exports = {
  getWishlistProducts,
};
