const jwt = require("jsonwebtoken");

let generateToken = (payload, key, expiration, delay = 0) => {
  const token = jwt.sign(payload, key, {
    expiresIn: expiration,
    notBefore: delay / 1000,
  });
  return token;
};
module.exports = generateToken;
