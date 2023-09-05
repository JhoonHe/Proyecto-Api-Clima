const { check, validationResult } = require("express-validator");

let validatorParams = [
  check("email").isEmail(),
  check("password").isLength({ min: 4, max: 15 }),
];

function validator(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

function validatorCredentials(req, res, next) {
  if (req.body.email === "test@gmail.com" && req.body.password === "12345") {
    next();
    return;
  }
  return res.status(400).json({ Status: "error" });
}

module.exports = {
  validatorParams,
  validator,
  validatorCredentials,
};
