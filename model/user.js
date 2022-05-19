const { DataTypes, Model } = require("sequelize"); // 导入内置数据类型
const sequelize = require("../db");

class User extends Model {}

User.init(
  {
    // 在这里定义模型属性
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    openid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platform: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment:'平台标识'
    },
  },
  {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: "User", // 我们需要选择模型名称
  }
);

module.exports = User;
