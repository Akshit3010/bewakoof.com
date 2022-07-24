const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authenticate = async (req, res, next) => {
  console.log(req);
  try {
    const token = req.headers["authorization"] || req.cookies.jwtoken;
    if (token) {
      const verifyToken = jwt.verify(token, process.env.SECRETKEY);
      const rootUser = await User.findOne({ _id: verifyToken.id });
      req.token = token;
      req.rootUser = rootUser;
      req.userID = rootUser._id;
      next();
    } else {
      return res.status(403).send({
        error: true,
        message: "No token provided.",
      });
    }
  } catch (err) {
    res.status(401).send("unauthorized user");
    console.log(err);
  }
};

module.exports = authenticate;
