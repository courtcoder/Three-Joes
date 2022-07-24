const router = require("express").Router();
const sequelize = require("../config/connection");
const { Category, Product, User } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/menu", (req, res) => {
  res.render("menu");
});

router.get("/order", (req, res) => {
  res.render("order");
});

router.get("/about-us", (req, res) => {
  res.render("about-us");
});

router.get("/login", (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect("/");
  //   return;
  // }
  res.render("login");
});

module.exports = router;
