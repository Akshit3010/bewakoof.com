const { Router } = require("express");
const {
  getProducts,
  postProducts,
  getProduct,
} = require("../controllers/products.controller");
const cookieParser = require("cookie-parser");
const prodRouter = Router();
prodRouter.use(cookieParser());

//Routes for products
prodRouter.get("/prod/:category", getProducts);
prodRouter.get("/product/:id", getProduct);
prodRouter.post("/prod", postProducts);

module.exports = prodRouter;
