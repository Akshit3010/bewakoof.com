const { Router } = require("express");
const {
  getProducts,
  postProducts,
} = require("../controllers/products.controller");
const prodRouter = Router();

//Routes for products
prodRouter.get("/:category", getProducts);
prodRouter.post("/prod", postProducts);

module.exports = prodRouter;
