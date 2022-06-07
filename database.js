const { Sequelize } = require("sequelize");

exports.sequelize = new Sequelize("todo", "root", "", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
});

exports.connectToDb = async function (sequelize) {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
