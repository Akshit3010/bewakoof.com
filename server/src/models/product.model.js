const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    imgUrl: { type: String, required: true },
    imgArray: [{ type: String }],
    description: { type: String },
    price: { type: Number },
    strikedOffprice: { type: Number },
    qty: { type: Number },
    rating: { type: Number },
    category: { type: String },
    sizes: [{ type: String }],
    brand: { type: String },
    reviews: [
      {
        name: String,
        date: Date,
        review: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Product = model("product", productSchema);
module.exports = Product;
