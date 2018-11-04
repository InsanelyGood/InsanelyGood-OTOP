const User = require("../models/users");
const Product = require("../models/products");

module.exports = async (req, res, next) => {
  console.log("req.user>>", req.user)
  let products = await Promise.all(
    req.user.cart_list.map(async item => {
      try {
        const product = await Product.findOne({
          id: item.productID
        }).exec();
        return { product, quantity: item.quantity };
      } catch (error) { }
    })
  )
  req.products = products
  console.log("req.products>>", req.products)
  next();
}