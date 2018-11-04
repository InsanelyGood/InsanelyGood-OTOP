const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

const User = require("../models/users");

const findUserByPath = require("../middlewares/findUserByPath");
const findProductsFromCartList = require("../middlewares/findProductsFromCartList")

router.get("/", (req, res) => {
  User.find({}, (err, users) => {
    res.send({ users });
  });
});

// Login Form
router.get("/login", function (req, res) {
  res.render("login");
});

router.get("/test", (req, res) => {
  // console.log(req.cookies)
  // res.sendStatus(200)
  res.status(200).send("Hello world");
});

// Login Process
router.post("/login", function (req, res, next) {
  console.log("login");

  passport.authenticate("local", function (err, user, info) {
    console.log("in local authen");
    if (err) {
      console.log("in error");
      console.log(err);
      return next(err);
    }

    console.log("user", user);
    if (!user) {
      return res.redirect("http://localhost:3000/users/login");
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }      
      
      return res
        .cookie("username", user.username)
        .redirect("http://localhost:3000/");
    });
  })(req, res, next);
});

// Register Form
router.get("/register", function (req, res) {
  res.render("register");
});

// Register Process
router.post("/register", function (req, res) {
  console.log("55555");
  
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const confirm_password = req.body.confirm_password;
  const telephone_number = req.body.telephone_number;

  req.checkBody("firstname", "Firstname is Required").notEmpty();
  req.checkBody("lastname", "Lastname is Required").notEmpty();
  req.checkBody("email", "Email is Required").notEmpty();
  req.checkBody("email", "Email is not valid").isEmail();
  req.checkBody("username", "Username is Required").notEmpty();
  req.checkBody("password", "Password is Required").notEmpty();
  req
    .checkBody("confirm_password", "Confirm Password do not match")
    .equals(req.body.password);
  req.checkBody("telephone_number", "telephone_number is Required").notEmpty();
  // req.checkBody('telephone_number','telephone_number size must be 10').size() == 10;

  let errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    // res.render('register', {
    //   errors: errors
    // });
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
      if (err) console.log(err);
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
            res.redirect("http://localhost:3000/users/login");
          }
        });
      });
    });
  }
});


// User Information
router.get("/:username/information", findUserByPath, (req, res, next) => {
  // console.log(">>>>>>>>",req.user)
  if (req.user) {
    const { role, username, firstname, lastname, email, address, telephone_number } = req.user
    res.status(200).send({
      role,
      username,
      firstname,
      lastname,
      email,
      address,
      telephoneNumber: telephone_number,
    })
  }
  else res.status(404).send("Not found");
});

// User Information save
router.post("/:username/information/save", findUserByPath, (req, res, next) => {
  // console.log("Req.body>>>>>>>>",req.body)
  // console.log("Req.user>>>>>>>>",req.user)
  if (req.user) {
    // console.log("if")
    const { username, password, firstname, lastname, email, address, telephoneNumber } = req.body
    let newUserData = {
      username,
      password,
      firstname,
      lastname,
      email,
      address,
      telephoneNumber
    }
    // console.log("newUserData>>>>",newUserData)

    const query = { _id: req.user._id }

    User.updateOne(query, newUserData, function (err) {
      // console.log("newUserData>>>>",newUserData)
      if (err) {
        console.log(err)
        res.status(404).send("Update fail. There is something wrong in update process")
        return
      } else {
        res.status(200).send("Update user data success")
        // res.redirect('http://localhost:3000/users/information')
      }
    });
  }
  else {

  }
});

// Cart list
router.get("/:username/cart", findUserByPath ,findProductsFromCartList, (req, res) => {
    res.status(200).send(req.products)
})

// Checkout Information
router.get("/:username/checkout", findUserByPath, findProductsFromCartList, (req, res) => {
  // console.log("address",req.user.address)
  // console.log("products",req.products)
  res.status(200).send({
    address: req.user.address,
    products: req.products
  })
})

module.exports = router;
