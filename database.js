const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
exports.sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_ROOT_PASSWORD,
  {
    host: "localhost",
    port: "3307",
    dialect: "mysql",
  }
);

exports.connectToDb = async function (sequelize) {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
