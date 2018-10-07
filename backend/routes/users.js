const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

let User = require('../models/users');

// Login Form
router.get('/login', function(req, res) {
  res.render('login');
});

// Login Process
router.post('/login', function(req, res, next) {
  passport.authenticate('local', {
    successRedirect: '/products',
    failureRedirect: '/users/login'
  })(req, res, next);
});


// Register Process
router.post('/register', function(req, res){
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const confirm_password = req.body.confirm_password;
  const telephone_number = req.body.telephone_number;

  req.checkBody('firstname','Firstname is Required').notEmpty();
  req.checkBody('lastname','Lastname is Required').notEmpty();
  req.checkBody('email','Email is Required').notEmpty();
  req.checkBody('email','Email is not valid').isEmail();
  req.checkBody('username','Username is Required').notEmpty();
  req.checkBody('password','Password is Required').notEmpty();
  req.checkBody('confirm_password','Confirm Password do not match').equals(req.body.password);
  req.checkBody('telephone_number','telephone_number is Required').notEmpty();
  // req.checkBody('telephone_number','telephone_number size must be 10').size() == 10;


})

module.exports = router;
