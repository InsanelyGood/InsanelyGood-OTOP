const express = require("express");
const router = express.Router();

const Order = require("../models/orders");
const User = require("../models/users");
const Product = require("../models/products");

const findUserByPath = require("../middlewares/findUserByPath");
const orderCreated = "orderCreated";
const adminAccepted = "adminAccepted";

router.get("/", (req, res, next) => {
  Order.find({}, (err, orders) => {
    res.send({ orders });
  });
});

router.post("/:username/create", findUserByPath, (req, res) => {
  const purchasedList = req.user.cart_list;
  // const dataTime = req.body.dataTime;
  const totalPrice = req.body.totalPrice;
  const shippingAddress = req.body.shippingAddress;
  // console.log('list',purchasedList);
  // console.log('send list', req.body.purchasedList);

  // console.log('price',totalPrice);

  let newOrder = new Order({
    purchasedList: purchasedList,
    dateTime: new Date(),
    totalPrice: totalPrice,
    status: orderCreated,
    shippingAddress: shippingAddress,
    userId: req.user._id
  });

  User.findOneAndUpdate(
    { username: req.user.username },
    { cart_list: [] },
    err => {
      if (err) {
        console.log(err);
      }
    }
  );

  let errors = req.validationErrors();
  if (errors) {
    console.log(errors);
  } else {
    newOrder.save(function(err) {
      if (err) {
        console.log(err);
        return;
      } else {
        // res.status(200).send("Created order success")
        res.redirect("http://localhost:3000/purchased");
      }
    });
  }
});

router.get("/:id", (req, res) => {
  Order.findById(req.params.id, (err, order) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ order });
    }
  });
});

// Update order status
router.post("/:id", (req, res) => {
  let order = {};
  order.status = req.body.status;
  let query = {
    _id: req.params.id
  };
  Order.findOneAndUpdate(query, order, { new: true }, (err, order) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send("Success");
    }
  });
});

router.delete("/:id", (req, res) => {
  let query = {
    _id: req.params.id
  };
  Order.findById(req.params.id, (err, order) => {
    Order.remove(query, err => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send("Success");
      }
    });
  });
});

router.get("/:id/fullDetail", (req, res) => {
  let data = {
    firstname: "",
    lastname: "",
    shippingAddress: "",
    status: "",
    purchasedList: [],
    totalPrice: 0
  };
  Order.findById(req.params.id, (err, order) => {
    if (err) {
      console.log(err);
    } else {
      User.findById(order.userId, async (err, user) => {
        if (err) {
          console.log(err);
        } else {
          data.firstname = user.firstname;
          data.lastname = user.lastname;
          data.shippingAddress = order.shippingAddress;
          data.status = order.status;
          data.totalPrice = order.totalPrice;
          data.purchasedList = await Promise.all(
            order.purchasedList.map(async item => {
              try {
                const product = await Product.findOne({
                  id: item.productID
                }).exec();
                return { product, quantity: item.quantity };
              } catch (error) {}
            })
          );

          res.send(data);
        }
      });
    }
  });
});

module.exports = router;
