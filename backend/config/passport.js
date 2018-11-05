const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users');
const bcrypt = require('bcryptjs');

module.exports = function (passport) {
  // Local Strategy
  passport.use(new LocalStrategy(function (username, password, done) {
    console.log('hi from passport use')
    console.log(username);
    console.log(password);
    // Match Username
    let query = { username: username };
    User.findOne(query, function (err, user) {
      if (err) throw err;
      console.log('query user:', user)
      if (!user) {
        return done(null, false, { message: 'No user found.' });
      }

      // Match Password
      bcrypt.compare(password, user.password, function (err, isMatch) {
        if (err) throw err;
        console.log("password", password)
        console.log("user password", user.password)
        console.log(password === user.password)
        if (isMatch || password === user.password) {
          console.log("match")
          console.log(user)
          return done(null, user);
        } else {
          console.log("not match")
          return done(null, false, { message: 'Wrong password' });
        }
      });
    });
  }));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

}
