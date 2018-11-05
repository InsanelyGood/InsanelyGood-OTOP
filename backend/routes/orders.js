const express = require("express");
const router = express.Router();

const Order = require('../models/orders')

const findUserByPath = require("../middlewares/findUserByPath");
const orderCreated = "orderCreated"
const adminAccepted = "adminAccepted"

router.get("/", (req, res, next) => {
  Order.find({}, (err, orders) => {
    res.send({ orders })
  })
})

router.post('/:username/create', findUserByPath, (req, res) => {
  const purchasedList = req.user.cart_list;
  // const dataTime = req.body.dataTime;
  const totalPrice = req.body.totalPrice;
  const shippingAddress = req.body.shippingAddress;
  // console.log('list',purchasedList);
  // console.log('send list', req.body.purchasedList);
  
  // console.log('price',totalPrice);
  
  
  let newOrder = new Order({
    purchasedList: purchasedList,
    dateTime: new Date,
    totalPrice: totalPrice,
    status: orderCreated,
    shippingAddress: shippingAddress,
    userId: req.user._id
  });

  let errors = req.validationErrors();
  if (errors) {
    console.log(errors);
  } else {
    newOrder.save(function (err) {
      if (err) {
        console.log(err);
        return;
      } else {
        // res.status(200).send("Created order success")
        res.redirect("http://localhost:3000/purchased");
      }
    })
  }
})

router.get('/:id', (req, res) => {
  Order.findById(req.params.id, (err, order) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ order })
    }
  })
})

// Update order status
router.post('/:id', (req, res) => {
  let order = {}
  order.status = req.body.status
  let query = {
    _id: req.params.id
  }
  Order.findOneAndUpdate(query, order, { new: true }, (err, order) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Update Success')
    }
  })
})

router.delete('/:id', (req, res) => {
  let query = {
    _id: req.params.id
  }
  Order.findById(req.params.id, (err, order) => {
    Order.remove(query, (err) => {
      if (err) {
        console.log(err)
      } else {
        res.send('Delete Success')
      }
    })
  })
})

module.exports = router;