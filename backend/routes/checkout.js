var express = require('express');
var router = express.Router();

const Order = require("../models/orders");

const findUserByPath = require("../middlewares/findUserByPath");
const findProductsFromCartList = require("../middlewares/findProductsFromCartList")
const orderCreated = "orderCreated"
const adminAccepted = "adminAccepted"

// Checkout Information
router.get("/:username/checkout", findUserByPath, findProductsFromCartList, (req, res) => {
  // console.log("address",req.user.address)
  // console.log("products",req.products)
  res.status(200).send({
    address: req.user.address,
    products: req.products
  })
})

// Confirm checking out + add to Order
router.get("/:username/checkout/confirm", findUserByPath, (req, res) => {
  const purchasedList = req.body.purchasedList;
  const dataTime = req.body.dataTime;
  const totalPrice = req.body.totalPrice;
  const shippingAddress = req.body.shippingAddress;
  // console.log("address",req.user.address)
  // console.log("products",req.products)

  let newOrder = new Order({
    purchasedList: purchasedList,
    dateTime: dataTime,
    tatalPrice: totalPrice,
    status: orderCreated,
    shippingAddress: shippingAddress,
    userId: req.user._id
  });

  newOrder.save(function(err){
    if (err) {
      console.log(err);
      return;
    } else {
      // res.redirect("http://localhost:3000/thankyou");
    }
  })

  res.status(200).send({
    address: req.user.address,
    products: req.products
  })
})

module.exports = router;
