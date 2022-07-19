const sequelize = require('../config/connection');
const { Product } = require('../models');

const productdata = [
  
  {
    prod_name: "Fried Mozzerella",
    prod_desc: "Creamy mozzerella cheese deep fried until golden brown, served with maranara sauce",
    price: 9.99,
    category_id: 1 
  },
  {
    prod_name: "Loaded Cheese Fries",
    prod_desc: "Our homemade fries smothered in our special three cheese blend, topped with bacon and served with a chipotle ranch dressing",
    price: 11.99,
    category_id: 1 
  },
  {
    prod_name: "Spinach & Artichoke Dip",
    prod_desc: "Spinach, artichokes, Romano, sauteed onions & red bell peppers. Topped with Parmesan bread crumbs and served with tortilla chips & salsa",
    price: 10.89,
    category_id: 1 
  },
  {
    prod_name: "Three Joe's Bacon Cheeseburger",
    prod_desc: "Cheddar, all-natural cheddar spread, lettuce, tomato, red onions and of course, bacon!",
    price: 12.19,
    category_id: 2 
  },
  {
    prod_name: "Philly Cheesesteak Burger",
    prod_desc: "Our classic burger, piled high with layers of roast beef, onions, red & green bell peppers and melted cheese",
    price: 14.79,
    category_id: 2 
  },
  {
    prod_name: "Classic Cheeseburger",
    prod_desc: "American cheese, lettuce, tomato and red onions",
    price: 11.29,
    category_id: 2 
  },
  {
    prod_name: "New York Dog",
    prod_desc: "All beef hot dog, deli mustard, sauerkraut and onions",
    price: 6.25,
    category_id: 3 
  },
  {
    prod_name: "Chicago Dog",
    prod_desc: "All beef hot dog, yellow mustard, green relish, tomatoes, onions, peppers and light sea salt",
    price: 6.25,
    category_id: 3 
  },
  {
    prod_name: "The Big Dog",
    prod_desc: "Foot long, all beef hot dog with your choice of any offered toppings",
    price: 7.25,
    category_id: 3 
  },
  {
    prod_name: "Oreo Dream Cheesecake",
    prod_desc: "Creamy Cheesecake Layered with Oreo® Cookies, Topped with Oreo® Cookie Mousse and Chocolate Icing",
    price: 8.95,
    category_id: 4 
  },
  {
    prod_name: "Toasted Marshmallow S'Mores Cheesecake",
    prod_desc: "Cheesecake Topped with marshmallow and graham crackers",
    price: 8.95,
    category_id: 4 
  },
  {
    prod_name: "Peanut Butter Cup Fudge Cheesecake",
    prod_desc: "Creamy cheesecake swirled with caramel, peanut butter and various candies",
    price: 9.25,
    category_id: 4 
  },
  {
    prod_name: "Lemon Raspberry Cheesecake",
    prod_desc: "Raspberry vanilla cake, creamy lemon cheesecake, lemon mousse",
    price: 8.75,
    category_id: 4 
  },
  {
    prod_name: "Original House Cheesecake",
    prod_desc: "Three Joe's Original Cheesecake. Graham cracker crust with a sour cream topping",
    price: 8.75,
    category_id: 4 
  }

];

const seedProducts = () => Product.bulkCreate(productdata, {individualHooks: true});

module.exports = seedProducts;
