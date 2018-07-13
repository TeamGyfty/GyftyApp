var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var User = require("../userModel.js");
// use static authenticate method of model in LocalStrategy
// passport.use(new LocalStrategy(User.authenticate()));
passport.use(User.createStrategy());
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new LocalStrategy({
    usernameField: "username"
  },
  function (name, password, done) {
    User.findOne({
        username: name
    }).then(function (user) {
      if (!user) {
        return done(null, false, {
          message: "Incorrect username."
        });
      } else if (user.password !== password) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, user);
    });
  }
));



// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport;