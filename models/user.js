"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name :{
        type : DataTypes.STRING,
      },
      email :{
        type : DataTypes.STRING,
      },
      password:{
        type : DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "User",
      createdAt:"created_at",
      updatedAt:"updated_at",
      tableName : "users",
    }
  );
  return User;
};
