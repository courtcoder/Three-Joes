const sequelize = require('../config/connection');
const { Category } = require('../models');

const categorydata = [

  {
    category_name: 'Appetizers'
  },
  {
    category_name: 'Burgers'
  },
  {
    category_name: 'Hot Dogs',
  },
  {
    category_name: 'Desserts',
  },
  
];

const seedCategory = () => Category.bulkCreate(categorydata, {individualHooks: true});

module.exports = seedCategory;
