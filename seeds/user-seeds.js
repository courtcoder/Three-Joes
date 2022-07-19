const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'CourtneyCasci',
    first_name: "Courtney",
    last_name: "Casci",
    email: 'ccasci@ucf.edu',
    password: 'password123'
  },
  {
    username: 'BrycePoole',
    first_name: "Bryce",
    last_name: "Poole",
    email: 'bpoole@ucf.edu',
    password: 'password123'
  },
  {
    username: 'JoeGallina',
    first_name: "Joe",
    last_name: "Gallina",
    email: 'jgallina@ucf.edu',
    password: 'password123'
  },
  {
    username: 'JosephDarville',
    first_name: "Joseph",
    last_name: "Darville",
    email: 'jdarville@ucf.edu',
    password: 'password123'
  },
  {
    username: 'JoeBarbone',
    first_name: "Joe",
    last_name: "Barbone",
    email: 'jbarbone@ucf.edu',
    password: 'password123'
  },
  
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
