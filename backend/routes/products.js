const express = require('express');
const router = express.Router();

let Product = require('../models/products');

router.get('/', (req, res, next) => {
    Product.find({}, (err, products) => {
        res.send({ products });
    });
})

router.get('/add', (req, res, next) => {
    res.render('add_product', {
        title: 'Add Product'
    })
})

router.post('/add', (req, res) => {
    const product = new Product();
    product.id = req.body.id
    product.name = req.body.name
    product.image = req.body.image
    product.price = req.body.price
    product.description = req.body.description
    product.stock = req.body.stock
    product.category = req.body.category
    product.region = req.body.region

    product.save()
    res.redirect('/products');
    // res.send({ product })
})
module.exports = router;