const router = require("express").Router();
const sequelize = require("../config/connection");
const { Category, Product, User } = require("../models");
const withAuth = require("../utils/auth")

router.get("/", (req, res) => {
  res.render("homepage");
  console.log(req.session);
});

router.get("/menu", withAuth, (req, res) => {
  Category.findAll({
    attribtes: ["id", "category_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "prod_name", "prod_desc", "price"],
      },
    ],
  })
    .then((dbCategoryData) => {
      const categories = dbCategoryData.map((category) =>
        category.get({ plain: true })
      );
      console.log(categories);
      res.render("menu", { categories, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/order", (req, res) => {
  res.render("order");
});

router.get("/about-us", (req, res) => {
  res.render("about-us");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
    res.redirect("/");
  } else {
    res.status(404).end();
  }
});

module.exports = router;
