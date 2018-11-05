const User = require("../models/users");

module.exports = (req, res, next) => {
  // console.log("UserFindByPath>>>",req.params.username);
  User.find({ username:req.params.username }, (err, user) => {
    if (err) {
      res.send(401)
    } else if (!user || user[0] == undefined) {
      // console.log("User Not Found")
      res.status(204)
    } else {
      req.user = user[0];
      // console.log("Find user!!")
      next();
    }
  });
};
