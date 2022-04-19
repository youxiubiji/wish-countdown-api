const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("User", {
  // 在这里定义模型属性
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // 设置为true时，会为列添加唯一约束
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
