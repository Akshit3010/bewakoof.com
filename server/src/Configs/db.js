const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.DATABASE;
const connect = () => {
  return mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = { connect, db };
