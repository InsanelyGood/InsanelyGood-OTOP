const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

const User = require("../models/users");
const Product = require("../models/products");
const Order = require("../models/orders");

const findUser = require("../middlewares/findUser");
const findUserByPath = require("../middlewares/findUserByPath");
const findProductsFromCartList = require("../middlewares/findProductsFromCartList");

router.get("/", (req, res) => {
  User.find({}, (err, users) => {
    res.send({ users });
  });
});

// Login Form
// router.get("/login", function (req, res) {
//   res.render("login");
// });

// router.get("/test", (req, res) => {
//   // console.log(req.cookies)
//   // res.sendStatus(200)
//   res.status(200).send("Hello world");
// });

// Login Process
router.post("/login", function(req, res, next) {
  console.log("login");

  passport.authenticate("local", function(err, user, info) {
    console.log("in local authen");
    if (err) {
      console.log("in error");
      console.log(err);
      return next(err);
    }

    console.log("user", user);
    if (!user) {
      // return res.redirect("http://localhost:3000/users/login");
      // res.status(401)
      res.status(500).send('Wrong username and password')
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      if (user.role === "admin") {
        return res.cookie("role", user.role).status(200).send({role: 'admin'});
      } else {
        return res
          .cookie("username", user.username)
          .status(200).send({ role: 'customer' });
      }
        // .status(200)
        // .send(user.username + " login success")
    });
  })(req, res, next);
});

// Register Form
// router.get("/register", function (req, res) {
//   res.render("register");
// });

// Register Process
router.post("/register", function(req, res) {
  console.log("Entire Register process");
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      res.send(401);
    } else if (!user) {
      console.log("Register gogo");
      registerProcess();
    } else {
      console.log("Username is already exits");
      res.status(409).send("Username is already exits");
    }
  });

  function registerProcess() {
    console.log("Register processing");
    console.log('user: ', req.body.firstname);
    
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
    req
      .checkBody("telephone_number", "telephone_number is Required")
      .notEmpty();
    // req.checkBody('telephone_number','telephone_number size must be 10').size() == 10;

    let errors = req.validationErrors();
    if (errors) {
      console.log('error: ',errors);
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

      bcrypt.genSalt(10, function(err, salt) {
        if (err) console.log(err);
        bcrypt.hash(newUser.password, salt, function(err, hash) {
          if (err) {
            console.log(err);
          }
          newUser.password = hash;
          newUser.save(function(err) {
            if (err) {
              console.log(err);
              return;
            } else {
              // res.redirect("http://localhost:3000/users/login");
              res.status(200).send(newUser.username + ' registeration is success')
            }
          });
        });
      });
    }
  }
});

// User change password
router.post("/password/change", findUser, (req, res, next) => {
  // console.log(">>>>>>>>User", req.user)
  // console.log(">>>>>>>>Body", req.body)
  let { username, oldPassword, newPassword } = req.body;
  console.log("user", req.body);

  // Match Password
  bcrypt.compare(oldPassword, req.user.password, function(err, isMatch) {
    if (err) throw err;
    if (isMatch || oldPassword == req.user.password) {
      bcrypt.genSalt(10, function(err, salt) {
        if (err) console.log(err);
        bcrypt.hash(newPassword, salt, function(err, hash) {
          if (err) {
            console.log(err);
          }
          newPassword = hash;
          const query = { username: username };
          User.findOneAndUpdate(query, { password: newPassword }, function(
            err
          ) {
            // console.log("newUserData>>>>",newUserData)
            if (err) {
              console.log(err);
              res.status(404).send({
                err: "Update fail. There is something wrong in update process"
              });
              return;
            } else res.status(200).send({ err: "Update password success" });
          });
        });
      });
    } else {
      return res.status(404).send({ err: "Wrong old password" });
    }
  });
});

// User Information
router.get("/:username/information", findUserByPath, (req, res, next) => {
  // console.log(">>>>>>>>",req.user)
  if (req.user) {
    const {
      role,
      username,
      firstname,
      lastname,
      email,
      address,
      telephone_number
    } = req.user;
    res.status(200).send({
      role,
      username,
      firstname,
      lastname,
      email,
      address,
      telephoneNumber: telephone_number
    });
  } else res.status(404).send("Not found");
});

// User Information save
router.post("/:username/information/save", findUserByPath, (req, res, next) => {
  // console.log("Req.body>>>>>>>>",req.body)
  // console.log("Req.user>>>>>>>>",req.user)
  const {
    username,
    firstname,
    lastname,
    email,
    address,
    telephoneNumber
  } = req.body;
  let newUserData = {
    username,
    password: req.user.password,
    firstname,
    lastname,
    email,
    address,
    telephoneNumber
  };
  // console.log("newUserData>>>>", newUserData)

  const query = { _id: req.user._id };

  User.updateOne(query, newUserData, function(err) {
    // console.log("newUserData>>>>",newUserData)
    if (err) {
      console.log(err);
      res
        .status(404)
        .send("Update fail. There is something wrong in update process");
      return;
    } else {
      res.status(200).send("Update user data success");
      // res.redirect('http://localhost:3000/users/information')
    }
  });
});

// Cart list
router.get(
  "/:username/cart",
  findUserByPath,
  findProductsFromCartList,
  (req, res) => {
    res.status(200).send(req.products);
  }
);

// Checkout Information
router.get(
  "/:username/checkout",
  findUserByPath,
  findProductsFromCartList,
  (req, res) => {
    // console.log("address",req.user.address)
    // console.log("products",req.products)
    res.status(200).send({
      address: req.user.address,
      products: req.products
    });
  }
);

router.get("/:username/orders", findUserByPath, (req, res) => {
  Order.find({ userId: req.user._id }, async (err, orders) => {
    if (err) {
      console.log(err);
    } else {
      const fullOrders = await Promise.all(
        orders.map(async order => {
          let newOrder = {
            _id: order._id,
            dateTime: order.dateTime,
            totalPrice: order.totalPrice,
            status: order.status,
            shippingAddress: order.shippingAddress,
            userId: order.userId
          };
          newOrder.purchasedList = await Promise.all(
            order.purchasedList.map(async item => {
              try {
                const product = await Product.findOne({
                  id: item.productID
                }).exec();
                return { product, quantity: item.quantity };
              } catch (error) {}
            })
          );
          return newOrder;
        })
      );
      res.send(fullOrders);
    }
  });
});

module.exports = router;
