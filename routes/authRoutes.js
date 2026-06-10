const { getRegister } = require("../controller/authController");

const router = require("express").Router();

router.route("/register").get(getRegister);

module.exports = router;
