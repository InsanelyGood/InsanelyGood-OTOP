const express = require("express");
const router = express.Router();

let Product = require("../models/products");

// All products
router.get("/", (req, res, next) => {
  console.log(req.cookies)
  if (req.cookies.username) {
    Product.find({}, (err, products) => {
      res.send({ products });
    });
  } else {
    res.status(401).send({
      error: 'mai dai login'
    })
  }
});

// North products
router.get("/north", (req, res, next) => {
  Product.find({ region: "north" }, (err, products) => {
    res.send({ products });
  });
});

// West products
router.get("/west", (req, res, next) => {
  Product.find({ region: "west" }, (err, products) => {
    res.send({ products });
  });
});

// East products
router.get("/east", (req, res, next) => {
  Product.find({ region: "east" }, (err, products) => {
    res.send({ products });
  });
});

// South products
router.get("/south", (req, res, next) => {
  Product.find({ region: "south" }, (err, products) => {
    res.send({ products });
  });
});

// Central products
router.get("/central", (req, res, next) => {
  Product.find({ region: "central" }, (err, products) => {
    res.send({ products });
  });
});

// Add product
router.get("/add", (req, res, next) => {
  res.render("add_product", {
    title: "Add Product"
  });
});

router.get("/:name", (req, res) => {
  Product.find(req.params, (err, product) => {
      res.send({product});
  })
});

// Add product to database
router.post("/add", (req, res) => {
  const product = new Product();
  product.id = req.body.id;
  product.name = req.body.name;
  product.image = req.body.image;
  product.price = req.body.price;
  product.description = req.body.description;
  product.stock = req.body.stock;
  product.category = req.body.category;
  product.region = req.body.region;

  product.save();
  res.redirect("/products");
  // res.send({ product })
});
module.exports = router;
