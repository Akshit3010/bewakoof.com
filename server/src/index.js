const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRouter = require("./routes/user.route");
const prodRouter = require("./routes/products.routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};
app.use(cors(corsOptions));

app.use("/users", userRouter);
app.use("/", prodRouter);

module.exports = app;
