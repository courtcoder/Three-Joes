const sequelize = require('../config/connection');
const { Category } = require('../models');

const categorydata = [

  {
    category_id: 1,
    category_name: 'Appetizers'
  },
  {
    category_id: 2,
    category_name: 'Hot Dogs'
  },
  {
    category_id: 3,
    category_name: 'Burgers',
  },
  {
    category_id: 4,
    category_name: 'Desserts',
  },
  
];

const seedCategory = () => Category.bulkCreate(categorydata, {individualHooks: true});

module.exports = seedCategory;
