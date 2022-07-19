// import models
const User = require("./User");
//const Product = require("./Product");
//const Category = require("./Category");


// add associations, examples below

//Products belongsTo category
//Product.belongsTo(Category, {
//  foreignKey: "category_id"
//});

// Categories have many Products
//Category.hasMany(Product, {
//  foreignKey: "category_id"
//});





// Products belongToMany Tags (through ProductTag)
//Product.belongsToMany(Tag, {
//  through: ProductTag,
//  foreignKey: "product_id"
//});

// Tags belongToMany Products (through ProductTag)
//Tag.belongsToMany(Product, {
//  through: ProductTag,
// foreignKey: "tag_id"
//});





module.exports = {
  User
};
