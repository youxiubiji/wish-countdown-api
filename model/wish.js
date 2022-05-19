const { DataTypes, Model } = require("sequelize");

const sequelize = require("../db");
const User = require("./user");

class Wish extends Model {}

Wish.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING, // 名称
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY, // 日期
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "id",
      },
    },
    wishType: {
      type: DataTypes.INTEGER,
      defaultValue: 1, // 1倒计时  2生日  3 纪念日  4 正计时
    },
    dateType: {
      type: DataTypes.INTEGER, //日期类型  1 公历  2农历
      defaultValue: 1,
    },
    note: {
      type: DataTypes.STRING,// 备注
    },
  },
  {
    sequelize,
    modelName: "Wish",
  }
);

module.exports = Wish;
