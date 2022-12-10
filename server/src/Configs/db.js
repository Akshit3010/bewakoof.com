const mongoose = require("mongoose");
const DB = process.env.DATABASE;

const connection = mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
