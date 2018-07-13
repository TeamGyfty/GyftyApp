var express = require("express");
var path = require("path");
// var favicon = require("serve-favicon"); 
var bodyParser = require("body-parser");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var session = require("cookie-session");
var passport = require("./config/passport.js");

var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;

var PORT = 3000;

var app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(session({ keys: ["keyboard cat"] }));
app.use(express.static(path.join(__dirname,"public")));
app.use(passport.initialize());
app.use(passport.session());

var User = require("./userModel.js");

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connect mongoose
mongoose.connect('mongodb://localhost/passport_local_mongoose_userdb', function(err) {
  if (err) {
    console.log('Could not connect to mongodb on localhost. Ensure that you have mongodb running on localhost and mongodb accepts connections on standard ports!');
  }
});
// mongoose.connect("mongodb://localhost/userdb");
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// Routes
app.post("/api/login", passport.authenticate("local"), function (req, res) {
  console.log(req.body);
  res.json("./home.html");
});

// app.post("/api/login", function (req, res) {
//   console.log(req.body);
//   res.json("./home.html");
// });

// app.post('/api/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/home');
//   });
// Route to post our form submission to mongoDB via mongoose
// app.post("/api/join", function(req, res) {
//   console.log(req.body);
//   User.create(req.body)
//     .then(function(dbUser) {
      
//       res.json(dbUser);
//     })
//     .catch(function(err) {
      
//       res.json(err);
//     });
// });

app.post("/api/join", function (req, res) {
  console.log(req.body);
  User.create(req.body)
  .then(function(dbUser) { 
    res.json(dbUser);
  })
  .catch(function(err) { 
    res.json(err);
  });
});

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
