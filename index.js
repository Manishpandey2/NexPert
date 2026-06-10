const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public/css/"));
const homeRoute = require("./routes/homeRoute");

app.use("", homeRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
