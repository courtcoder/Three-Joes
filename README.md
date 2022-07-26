# Three Joe's and Courtney by the Poole Restaurant
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
- connect-session-sequelize
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

---

## Project Description:

This project will allow the users to browse a menu, select items to add to an order, then checkout. They will be required to sign in if they wish to place an order, otherwise they will be able to freely browse the site and see all of our tasty offerings. 

## User Story:

AS A consumer  
I WANT to be able to visit the restaurants website  
SO THAT I can place an order for pickup

## Presentation:



## Links:

Github Repo
Live Site

## Screenshot:



