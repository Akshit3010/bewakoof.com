const { Router } = require("express");
const {
  getProducts,
  postProducts,
  getProduct,
} = require("../controllers/products.controller");
const prodRouter = Router();

//Routes for products
prodRouter.get("/:category", getProducts);
prodRouter.get("/product/:id", getProduct);
prodRouter.post("/prod", postProducts);

module.exports = prodRouter;
