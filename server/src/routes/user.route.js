const User = require("../models/user.model");
const Product = require("../models/product.model");
const {
  getProducts,
  addToWishlist,
  removeProduct,
  orderProduct,
  changeQuantity,
} = require("../controllers/mybag.controller");
const {
  getOrders,
  getUser,
} = require("../controllers/accountDetails.controller");
const { addToCart } = require("../controllers/ProductDetails.controllers");
const { getWishlistProducts} = require("../controllers/wishlist.controllers");
const createUser = require("../controllers/CreateUser.controller");

const { Router } = require("express");
const { getGoogleUser } = require("../controllers/google.controller");
const userRouter = Router();


userRouter.post("/",createUser)

// All routes of mybag Page
userRouter.get("/cart/:id", getProducts);
userRouter.patch("/addToWishlist/:id", addToWishlist);
userRouter.patch("/removeProduct/:id", removeProduct);
userRouter.patch("/order/:id", orderProduct);
userRouter.patch("/qty/:id", changeQuantity);

// Getting the user from Google with the code
userRouter.get(`/auth/google/callback`, getGoogleUser);

// All routes of MyAccount Page
userRouter.get("/orders/:id", getOrders);
userRouter.get("/:id", getUser);

// All routes of AddToCart Page
userRouter.patch("/addToCart/:id", addToCart);

//All routes of Wishlist Page
userRouter.get("/wishlisht/:id", getWishlistProducts);


module.exports = userRouter;
