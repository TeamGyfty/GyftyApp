var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
 
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  }
  
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User); //
// var User = mongoose.model("User", UserSchema);

// module.exports = User;
