const {
  getProducts,
  addToWishlist,
  removeProduct,
  orderProduct,
  changeQuantity,
  removeWish,
} = require("../controllers/mybag.controller");
const {
  getOrders,
  getUser,
} = require("../controllers/accountDetails.controller");
const { addToCart } = require("../controllers/productDetails.controllers");
const { getWishlistProducts } = require("../controllers/wishlist.controllers");
const createUser = require("../controllers/CreateUser.controller");

const { Router } = require("express");
const { getGoogleUser } = require("../controllers/google.controller");
const userRouter = Router();
const cookieParser = require("cookie-parser");
const authenticate = require("../Middleware/Authenticate");
const { verify, logout } = require("../controllers/user.controller");

userRouter.post("/", createUser);
userRouter.use(cookieParser());

// All routes of mybag Page
//verify token
userRouter.get("/verify", authenticate, verify);

//logout
userRouter.get("/logout", logout);

userRouter.get("/cart/:id", getProducts);
userRouter.patch("/addToWishlist/:id", authenticate, addToWishlist);
userRouter.patch("/removeProduct/:id", authenticate, removeProduct);
userRouter.patch("/removeWish/:id", authenticate, removeWish);
userRouter.patch("/order/:id", authenticate, orderProduct);
userRouter.patch("/qty/:id", changeQuantity);

// Getting the user from Google with the code
userRouter.get(`/auth/google/callback`, getGoogleUser);

// All routes of MyAccount Page
userRouter.get("/orders/:id", authenticate, getOrders);
userRouter.get("/:id", authenticate, getUser);

// All routes of AddToCart Page
userRouter.patch("/addToCart/:id", authenticate, addToCart);

//All routes of Wishlist Page
userRouter.get("/wishlisht/:id", authenticate, getWishlistProducts);

module.exports = userRouter;
