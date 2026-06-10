const {
  getRegister,
  getLogin,
  register,
  getForgotPassword,
} = require("../controller/authController");

const router = require("express").Router();

router.route("/register").get(getRegister).post(register);
router.route("/login").get(getLogin);
router.route("/forgot-password").get(getForgotPassword);

module.exports = router;
