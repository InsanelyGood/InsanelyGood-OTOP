const User = require("../models/users");

module.exports = (req, res, next) => {
  User.find({ username: req.body.username }, (err, user) => {
    if (err) {
      res.send(401);
    } else if (!user) {
      res.send(404);
    } else {      
      req.user = user[0];
      req.cart = req.body.cart
      next();
    }
  });
};
