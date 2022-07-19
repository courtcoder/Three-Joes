const router = require('express').Router();
const { identity } = require('lodash');
const { User } = require('../../models');

// get all users
router.get('/', (req, res) => {

  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});



// get one user by id
router.get("/:id", (req, res) => {

  User.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: req.params.id
      }
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: `No user found with ID: ${req.params.id}` })
        return;
      } 
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});



// create new user
router.post("/", (req, res) => {
  
  User.create({
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});



// update user username by id
router.put("/:id", (req, res) => {

  User.update(
    {
      username: req.body.username
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })

});



// delete user by id
router.delete("/:id", (req, res) => {

  User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  
});





module.exports = router;