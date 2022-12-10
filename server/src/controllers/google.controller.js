const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENTID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const queryString = require("query-string");
const { default: axios } = require("axios");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { createUser } = require("./user.controller");

const getGoogleUser = async (req, res) => {
  const code = req.query.code;

  const { id_token, access_token } = await getTokens({
    code,
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    redirectUri: `https://bewakoof-com-topaz.vercel.app/users/auth/google/callback`,
  });

  // Fetch the user's profile with the access token and bearer
  const googleUser = await getUser({ id_token, access_token });

  await createUser(googleUser);
  const user = await User.findOne({ email: googleUser.email });
  let token;
  if (user) {
    token = genereateAccessToken(user);
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 3000000),
      secure: true,
    });
    console.log(token);
  }
  res.redirect("https://heady-rabbits-8957.vercel.app/?" + token);
};

function getTokens({ code, clientId, clientSecret, redirectUri }) {
  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    grant_type: "authorization_code",
  };

  return axios
    .post(url, queryString.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Failed to fetch auth tokens`);
      throw new Error(error.message);
    });
}

const getUser = async ({ id_token, access_token }) => {
  return axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      }
    )
    .then((res) => {
      const payload = {
        avatar: res.data.picture,
        first_name: res.data.given_name,
        Last_name: res.data.family_name,
        username: res.data.given_name + "@123",
        email: res.data.email,
        password: "12345",
        date_of_birth: "",
        gender: "",
        phone_number: "",
        mybag: [],
        wishlist: [],
        myorders: [],
        addresses: [],
      };
      return payload;
    })
    .catch((error) => {
      console.error(`Failed to fetch user`);
    });
};

function genereateAccessToken(user) {
  return jwt.sign(
    { id: user?._id, name: user.name, email: user.email, avatar: user.avatar },
    process.env.SECRETKEY,
    {
      expiresIn: "1h",
    }
  );
}

module.exports = { getGoogleUser };
