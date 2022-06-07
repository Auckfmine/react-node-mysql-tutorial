const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

exports.Todo = sequelize.define("todo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: { type: DataTypes.STRING, allowNull: false },
});
//sync the database if it not exists
//sequelize.sync({ force: true });
