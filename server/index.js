require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./src/Configs/db");

const PORT = process.env.PORT || 8000;

const userRouter = require("./src/routes/user.route");
const prodRouter = require("./src/routes/products.routes");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: true,
  credentials: true, //included credentials as true
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("App working");
});

app.use("/users", userRouter);
app.use("/", prodRouter);

app.listen(PORT, async () => {
  await connection;
  console.log(`Server started at ${PORT}`);
});
