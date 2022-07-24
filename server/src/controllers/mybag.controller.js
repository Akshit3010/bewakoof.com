const User = require("../models/user.model");
const Product = require("../models/product.model");
const getProducts = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);

  let UserData;
  let productData;
  try {
    UserData = await User.findById(id).lean().exec();
    // console.log(UserData)
    productData = UserData.mybag;
    return res.status(200).json({ productData });
  } catch (err) {
    return res.status(503).json({ err: err.message });
  }
};

const addToWishlist = async (req, res) => {
  const { id } = req.params;
  const { productId } = req.body;

  let UserData;
  let productData;

  try {
    productData = await Product.findById(productId);
    UserData = await User.findByIdAndUpdate(id, {
      $push: { wishlist: productData },
    });
    return res.status(200).json({ productData: UserData.mybag });
  } catch (err) {
    return res.status(501).json({ err: err.message });
  }
};

const removeProduct = async (req, res) => {
  const { id } = req.params;
  const { productId } = req.body;

  let UserData;
  let productData;
  try {
    UserData = await User.findById(id).lean().exec();
    productData = UserData.mybag;
    productData = productData.filter((el) => el._id != productId);
    UserData = await User.findByIdAndUpdate(id, {
      $set: { mybag: productData },
    });
    return res.status(200).json({ productData });
  } catch (err) {
    return res.status(501).json({ err: err.message });
  }
};

const removeWish = async (req, res) => {
  const { id } = req.params;
  const { productId } = req.body;

  let UserData;
  let productData;
  try {
    UserData = await User.findById(id).lean().exec();
    productData = UserData.wishlist;
    productData = productData.filter((el) => el._id != productId);
    UserData = await User.findByIdAndUpdate(id, {
      $set: { wishlist: productData },
    });
    return res.status(200).json({ productData });
  } catch (err) {
    return res.status(501).json({ err: err.message });
  }
};

const orderProduct = async (req, res) => {
  const { id } = req.params;
  const { productId } = req.body;

  let UserData;
  let productData;
  try {
    UserData = await User.findById(id);
    productData = UserData.mybag;
    UserData = await User.findByIdAndUpdate(id, { myorders: productData });
    UserData = await User.findByIdAndUpdate(id, { mybag: [] });
    return res.status(200).json({ myorders: productData.myorders });
  } catch (err) {
    return res.status(501).json({ err: err.message });
  }
};

const changeQuantity = async (req, res) => {
  const { id } = req.params;
  const { productId, qty } = req.body;
  console.log(req.body);
  let UserData;
  let productData;
  try {
    UserData = await User.findById(id).lean().exec();
    productData = UserData.mybag;
    productData = productData.map((el) => {
      if (el._id == productId) {
        el.qty = qty;
      }
      return el;
    });

    UserData.mybag = productData;
    UserData = await User.findByIdAndUpdate(id, { mybag: productData });

    console.log(UserData);

    return res.status(200).json({ productData });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

module.exports = {
  getProducts,
  addToWishlist,
  removeProduct,
  orderProduct,
  removeWish,
  changeQuantity,
};
