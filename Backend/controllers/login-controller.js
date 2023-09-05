const signingKey = require("../config/keys");
const generateToken = require("../helpers/generator-tokens");

let login = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (email === "test@gmail.com" && password === "12345") {

    let token = generateToken(
      { email: email },
      signingKey.KEY_TOKEN,
      new Date().getTime() + 2 * 60 * 1000
    );
    return res.status(200).json({ Status: "ok", token: token });
  }

  return res.status(400).json({ Status: "error" });
};

module.exports = {
  login,
};
