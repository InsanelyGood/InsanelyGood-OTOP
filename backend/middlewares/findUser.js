const User = require("../models/users");

module.exports = (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      res.send(401);
    } else if (!user) {
      res.redirect('http://localhost:3000/users/login')
      // res.send(404);
    } else {      
      req.user = user;
      next();
    }
  });
};
