const {
  getRegister,
  getLogin,
  register,
} = require("../controller/authController");

const router = require("express").Router();

router.route("/register").get(getRegister).post(register);
router.route("/login").get(getLogin);

module.exports = router;
