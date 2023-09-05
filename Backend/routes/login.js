const express = require("express");
const loginController = require("../controllers/login-controller");
const validatorLogin = require("../middleware/login-validator");
const router = express.Router();

router.post(
  "/",
  validatorLogin.validatorParams,
  validatorLogin.validator,
  loginController.login
);

module.exports = router;
