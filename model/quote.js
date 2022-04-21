const { DataTypes, Model } = require("sequelize");

const sequelize = require("../db");

class Quote extends Model {}

Quote.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    content: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Quote",
  }
);

module.exports = Quote;
