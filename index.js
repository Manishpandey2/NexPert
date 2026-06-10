require("dotenv").config();
require("./model");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("./public/css/"));
const homeRoute = require("./routes/homeRoute");
const authRoute = require("./routes/authRoutes");
app.use("", homeRoute);
app.use("", authRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
