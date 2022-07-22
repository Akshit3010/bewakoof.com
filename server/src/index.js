const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user.route");
const prodRouter = require("./routes/products.routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", userRouter);
app.use("/", prodRouter);

module.exports = app;
