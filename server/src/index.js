const express = require("express");

require("dotenv").config();

const userRouter = require("./routes/user.route");
const prodRouter = require("./routes/products.routes");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("App working");
});

app.use("/users", userRouter);
app.use("/", prodRouter);

module.exports = app;
