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
    * catnum
    * category_name

---

## Project Description

This project will allow the users to browse a menu, select items to add to an order, then checkout. They will be required to sign in if they wish to place an order, otherwise they will be able to freely browse the site and see all of our tasty offerings. 

## User Story

AS A consumer  
I WANT to be able to visit the restaurants website  
SO THAT I can place an order for pickup

## Presentation/Screenshot

Main screen
![main screen - Three Joe's website](/public/images/screenshot-main.JPG)

Menu screen
![menu screen - Three Joe's website](/public/images/screenshot-main1.JPG)

Cart screen  
![cart screen - Three Joe's website](/public/images/screenshot-main2.JPG)

[Live Presentation](https://docs.google.com/presentation/d/15WEYkBOP9_9AuGmD1_xfu5ybtDlUJ3c7lD2jtHKpMWE/edit?usp=sharing)

---

## Links

[Three Joe's and Courtney by the Poole GitHub Repo](https://github.com/courtcoder/Three-Joes)  
[Heroku Live Site](https://serene-citadel-89543.herokuapp.com/)  
[Live Presentation](https://docs.google.com/presentation/d/15WEYkBOP9_9AuGmD1_xfu5ybtDlUJ3c7lD2jtHKpMWE/edit?usp=sharing)

---

## Summary/Languages

This project was completed in a very short timeframe, yet there is a lot of work that went into it. The front end is created using a combination of HTML/CSS/Javascript as well as Bulma for a front-end framework. The back-end is comprised of NodeJS, MySQL, Express, Sequelize, Handlebars and Heroku.

![html 5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css 3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![node js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![json](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white) ![mysql](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) ![sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) ![handlebars](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)

![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) ![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ![heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

---


## Acknowledgements

Project team was as follows:

* Joe Barbone - “Model” & “Controllers” (back-end, MySQL schema, routes)
* Courtney Casci - “Views” (front-end, CSS)
* Joseph Darville - “Model” & “Views” (front-end, Menu page)
* Joe Gallina - “Controllers” & “Views” (front-end, Handlebars, routes)
* Bryce Poole - “Controllers” & “Views” (front-end, Order)

Also, a very big "thank you to the TAs, Gary and Ronny, we couldn't have done it without you!



