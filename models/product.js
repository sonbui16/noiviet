"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      // Khai báo cột trong table
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      desc: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      category_id: {
        type: DataTypes.INTEGER,
      },
      stock: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Product",
      // Mặc định Sequelize sẽ có 2 trường: createdAt và updatedAt
      createdAt: "created_at",
      updatedAt: "updated_at",
      //Nếu muốn bỏ qua createdAt và updatedAt thì khai báo timestamps:false
      // timestamps:false,
      // và table-name
      tableName: "products",
    }
  );
  return Product;
};
