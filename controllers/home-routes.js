const router = require("express").Router();
const sequelize = require("../config/connection");
const { Category, Product, User } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
  console.log(req.session)
});





router.get("/joe", (req, res) => {
  if (req.session.loggedIn) {
// I think this is the area that has to work for the login, I need to pass the session data somehow
  }
  
})
.then(dbUserData => {
  const user = dbUserData.map(user => user.get({ plain: true }));
  res.render("joe-test-login", {
    user,
    loggedIn: req.session.loggedIn
  });
})

router.get("/error", (req, res) => {
  res.render("error");
});










router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
