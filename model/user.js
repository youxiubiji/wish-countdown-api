const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("User", {
  // 在这里定义模型属性
  id: {
    type: DataTypes.UUID, //类型
    primaryKey: true, //主键
    unique: {
      msg: "id不能相同",
    }, // 设置为true时，会为列添加唯一约束
    comment: "id",
  },
  openid: {
    type: DataTypes.STRING(50),
    unique: {
      msg: "用户已存在",
    },
    comment: "用户openid",
  },
  platform: {
    type: DataTypes.STRING(50),
    comment: "平台标识",
  },
});

module.exports = User;
