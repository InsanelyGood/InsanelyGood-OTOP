const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

let User = require('../models/users');

// Login Form
router.get('/login', function (req, res) {
  res.render('login');
});

router.get('/test', (req, res) => {
  console.log(req.cookies)
  res.sendStatus(200)
})

// Login Process
router.post('/login', function (req, res, next) {
  console.log("login");

  passport.authenticate('local', function (err, user, info) {
    console.log('in local authen')
    if (err) {
      console.log('in error')
      console.log(err)
      return next(err);
    }

    console.log('user', user)
    if (!user) {
      return res.redirect('http://localhost:3000/users/login')
    }

    req.logIn(user, function (err) {
      if (err) { return next(err); }
      return res.cookie('username', user.username).redirect('http://localhost:3000/');
    });
  })(req, res, next);
});

// Register Form
router.get('/register', function (req, res) {
  res.render('register');
})

// Register Process
router.post('/register', function (req, res) {

  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const confirm_password = req.body.confirm_password;
  const telephone_number = req.body.telephone_number;

  req.checkBody('firstname', 'Firstname is Required').notEmpty();
  req.checkBody('lastname', 'Lastname is Required').notEmpty();
  req.checkBody('email', 'Email is Required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is Required').notEmpty();
  req.checkBody('password', 'Password is Required').notEmpty();
  req.checkBody('confirm_password', 'Confirm Password do not match').equals(req.body.password);
  req.checkBody('telephone_number', 'telephone_number is Required').notEmpty();
  // req.checkBody('telephone_number','telephone_number size must be 10').size() == 10;

  let errors = req.validationErrors();
  if (errors) {
    console.log(errors)
    res.render('register', {
      errors: errors
    });
  } else {
    let newUser = new User({
      role: "customer",
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      email: email,
      address: "",
      telephone_number: telephone_number,
      cart_list: []
    });

    bcrypt.genSalt(10, function (err, salt) {
      if (err) console.log(err)
      bcrypt.hash(newUser.password, salt, function (err, hash) {
        if (err) {
          console.log(err);
        }
        newUser.password = hash;
        newUser.save(function (err) {
          if (err) {
            console.log(err);
            return;
          } else {
            res.redirect('/users/login');
          }
        });
      });
    });

  }

})

module.exports = router;
