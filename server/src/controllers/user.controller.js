const User = require("../models/user.model");

//create new user
async function createUser({ name, email, avatar }) {
  try {
    const user = await User.findOne({ email: email });

    if (user?.name) {
      return { message: "User Already exists", status: "error" };
    } else {
      const user = new User({
        name,
        email,
        avatar,
      });
      await user.save();
      return {
        message: "User Created Successfully",
        status: "success",
      };
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = { createUser };
