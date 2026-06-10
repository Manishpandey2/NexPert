const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/dbConfig");
const userModel = require("./userModel");

const { dbname, user, password, host, port, dialect, pool } = dbConfig;
const sequelize = new Sequelize(dbname, user, password, {
  host,
  port,
  dialect,
  pool,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Unable to connect to database", err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = userModel(sequelize, DataTypes);
sequelize.sync({ force: false }).then(() => {
  console.log("Synced Done");
});

module.exports = db;
