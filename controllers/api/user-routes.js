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
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      res.json(dbUserData);
    });
  })

});



// login route
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    // this should be a single statement returning a login error if one or the other don't match
    const validPassword = dbUserData.checkPassword(req.body.password);
  

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    
    // saving and assigning session data here but it isn't working
    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      // req.session.username = "Test Username";
      req.session.loggedIn = true;
      res.json({ user: dbUserData, message: 'You are now logged in!' });
      // res.json({ user: dbUserData, message: 'You are now logged in!' });
      console.log("You are now logged in!");
    });
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