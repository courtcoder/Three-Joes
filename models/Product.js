const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Category = require('./Category');

// create our Product model
class Product extends Model {}
 

// create fields/columns for User model
Product.init(

  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    prod_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prod_desc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        validate: {
            isNumeric: true
        }
    },
    img_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      },
      references: Category.id
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
  }

);

module.exports = Product;
