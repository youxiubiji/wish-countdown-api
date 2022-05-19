const { DataTypes, Model } = require("sequelize");

const sequelize = require("../db");

class Holiday extends Model {}

Holiday.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    cover: {
      type: DataTypes.STRING, // 封面
    },
    title: {
      type: DataTypes.STRING, /// 节日标题
    },
    dateType: {
      type: DataTypes.INTEGER, //日期类型  1 公历  2农历
      defaultValue: 1,
    },
    date: {
      type: DataTypes.DATEONLY, // 日期
    },
    disable: {
      type: DataTypes.INTEGER,
      defaultValue: 1, // 1 展示，0 不展示
    },
    note: {
      type: DataTypes.STRING, // 备注
    },
  },
  {
    sequelize,
    modelName: "Holiday",
  }
);

module.exports = Holiday;
