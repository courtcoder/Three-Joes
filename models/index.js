// import models
const User = require("./User");
const Product = require("./Product");
const Category = require("./Category");


// add associations, examples below

//Products belongsTo category
Product.belongsTo(Category, {
 foreignKey: "category_id"
});

//Categories have many Products
Category.hasMany(Product, {
 foreignKey: "category_id"
});


module.exports = {
  User,
  Product,
  Category
};
