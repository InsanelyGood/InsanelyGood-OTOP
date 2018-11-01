const express = require("express");
const router = express.Router();

const findUser = require("../middlewares/findUser");

router.get('/', findUser, (req, res) => {
  res.send(req.user.cart_list)
})

router.post("/add", findUser, (req, res) => {
  const isInCart = req.user.cart_list.find(
    cart => cart.productID === req.body.productID
  );  
  if (isInCart) {
    req.user.updateOne({
      cart_list: req.user.cart_list.map(cartItem => {
        if (cartItem.productID === req.body.productID)
          cartItem.quantity = req.body.quantity;
        return cartItem;
      })
    });
  } else {
    req.user.cart_list.push({
      productID: req.body.productID,
      quantity: req.body.quantity
    });
  }
  req.user.save(err => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.redirect("http://localhost:3000/cart");
    }
  });
});

router.post("/remove", findUser, (req, res) => {
  req.user.cart_list = req.user.cart_list.filter(
    cartItem => cartItem.productID !== req.body.productID
  );
  req.user.save(err => {
    if (err) {
      console.log(err);
    } else {
      res.send(req.user.cart_list);
    }
  });
});

router.post("/removeAll", findUser, (req, res) => {
  req.user.updateOne({ cart_list: [] }, err => {
    if (err) {
      console.log(err);
    }
  });
  req.user.save(err => {
    if (err) {
      console.log(err);
    }
  });
  res.send("Success");
});

module.exports = router;
