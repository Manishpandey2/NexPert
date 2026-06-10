exports.getRegister = (req, res) => {
  res.render("auth/register");
};
exports.register = (req, res) => {
  console.log(req.body);
};
exports.getLogin = (req, res) => {
  res.render("auth/login");
};
