const sequelize = require('../config/connection');
const { Category } = require('../models');

const categorydata = [

  {
    id: 1,
    catnum: 1,
    category_name: 'Appetizers'
  },
  {
    id: 2,
    catnum: 2,
    category_name: 'Hot Dogs'
  },
  {
    id: 3,
    catnum: 3,
    category_name: 'Burgers',
  },
  {
    id: 4,
    catnum: 4,
    category_name: 'Desserts',
  },
  
];

const seedCategory = () => Category.bulkCreate(categorydata, {individualHooks: true});

module.exports = seedCategory;
