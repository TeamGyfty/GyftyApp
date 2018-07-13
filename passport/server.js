var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var session = require("express-session");
var passport = require("passport");  
var passport = require("./config/passport.js");
var LocalStrategy = require('passport-local').Strategy;

var PORT = 3000;


var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

var User = require("./userModel.js");
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
mongoose.connect("mongodb://localhost/userdb");
// mongoose.connect("mongodb://localhost/passport_local_mongoose_userdb");

// Routes

app.get("/join", function(req,res){
  res.send("./join.html");
})
app.post('/api/login', 
  passport.authenticate('local', { failureRedirect: '/join' }),
  function(req, res) {
    res.json('./home.html');
  });


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


// app.post("/api/login", passport.authenticate("local"), function (req, res) {
//   console.log(req.body);
//   res.json("./home.html");

//   app.post('/api/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login' }));
//   // res.redirect('/home.html.');
// });
// app.post("/api/login", function (req, res) {
//   console.log(req.body);
//   res.json("./home.html");

// });
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