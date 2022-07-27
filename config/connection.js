const Sequelize = require("sequelize");

require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PWD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );

  const connDB = sequelize
    .authenticate()
    .then(function () {
      console.log("Connected Successfully!");
    })
    .catch(function (err) {
      console.log("Connection Failed!");
    });
}

module.exports = sequelize;
