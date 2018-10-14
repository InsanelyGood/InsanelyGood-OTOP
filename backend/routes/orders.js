const express = require("express");
const router = express.Router();

const Order = require('../models/orders')

router.get("/", (req, res, next) => {
  Order.find({}, (err, orders) => {
    res.send({orders})
  })
})

router.get('/new_order', (req, res) => {
  res.render('new_order')
})

router.post('/new_order', (req, res) => {
  let order = new Order()
  order.purchased_list = req.body.purchased_list
  order.date_time = new Date
  order.total_price = req.body.total_price
  order.status = req.body.status
  order.shipping_address = req.body.shipping_address
  order.userID = req.body.userID;

  order.save()
  res.redirect('/orders')
})

router.get('/:id', (req, res) => {
  Order.findById(req.params.id, (err, order) => {
    if(err) {
      console.log(err);
    } else {
      res.send({order})
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
  Order.findOneAndUpdate(query, order, {new: true}, (err, order) => {
    if(err) {
      console.log(err);
    } else {
      res.send('Success')
    }
  })
})

router.delete('/:id', (req, res) => {
  let query = {
    _id: req.params.id
  }
  Order.findById(req.params.id, (err, order) => {
    Order.remove(query, (err) => {
      if(err) {
        console.log(err)
      } else {
        res.send('Success')
      }
    })
  })
})

module.exports = router;