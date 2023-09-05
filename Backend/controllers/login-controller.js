const signingKey = require("../config/keys");
const generateToken = require("../helpers/generator-tokens");

let login = (req, res) => {
  let email = req.body.email;

  let token = generateToken(
    { email: email },
    signingKey.KEY_TOKEN,
    new Date().getTime() + 2 * 60 * 1000
  );

  return res.status(200).json({ Status: "ok", token: token });
};

module.exports = {
  login,
};
