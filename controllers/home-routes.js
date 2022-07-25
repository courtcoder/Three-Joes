const router = require("express").Router();
const sequelize = require("../config/connection");
const { Category, Product, User } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
  console.log(req.session)
});

router.get("/menu", (req, res) => {
    console.log(req.session);
    res.render("menu", req.session);
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


router.get("/logout", (req, res) => {
    
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
  })
      res.redirect("/");
  } else {
    res.status(404).end();
  }
  
});

module.exports = router;
