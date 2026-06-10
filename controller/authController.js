const db = require("../model");
const { users } = db;
const bcrypt = require("bcrypt");

exports.getRegister = (req, res) => {
  res.render("auth/register");
};
exports.register = async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).send("Each fields are required");
  }
  const existingEmail = await users.findOne({
    where: {
      email: email.toLowerCase(),
    },
  });
  if (existingEmail) {
    return res.status(400).send("This email address is already registered");
  }

  await users.create({
    fullName,
    email,
    password: bcrypt.hashSync(password, 10),
  });
  // res.status(200).send("User Account Created Successfully");
  res.redirect("/login");
};
exports.getLogin = (req, res) => {
  res.render("auth/login");
};
exports.getForgotPassword = (req, res) => {
  res.render("auth/forgetPassword");
};
