const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    avatar: { type: String },
    first_name: { type: String, required: true },
    Last_name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date_of_birth: { type: String },
    gender: { type: String },
    phone_number: { type: Number },
    mybag: [{ type: Object }],
    wishlist: [{ type: Object }],
    myorders: [{ type: Object }],
    addresses: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);
module.exports = User;
