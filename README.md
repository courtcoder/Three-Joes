# Three Joe's Burgers and Hot Dogs
## Project #2 - Team Members
- Courtney Casci
- Bryce Poole
- Joe Gallina
- Joseph Darville
- Joe Barbone

## Required NPM Packages
- express
- mysql2
- handlebars
- sequelize
- dotenv
- express-session
- bcrypt

If your package.json file lists all of the dependencies, you should just be able to run "npm install" or "npm i", and it will install all of the dependencies all together. You will also be able to seed the data by running "npm run seed", this will populate the database with demo data. 

## Database Structure
This details the current database structure.  
### Database Name
* threejoes_db

### Database Tables
* user - contains app users
* product - contains our menu products
* category - contains our menu categories

### Table Definition
* user
    * id
    * username
    * first_name
    * last_name
    * email
    * password

* product
    * id
    * prod_name
    * prod_desc
    * price
    * category_id

* category
    * id
    * category_name


