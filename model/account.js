const { DataTypes, Model } = require("sequelize");

const sequelize = require("../db");

class Account extends Model {}

Account.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Account",
  }
);

module.exports = Account;
