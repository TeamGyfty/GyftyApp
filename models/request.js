const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var RequestSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  response: [{
    type: Schema.Types.ObjectId,
    ref: "Response"
  }]
});

var Request = mongoose.model("Request", RequestSchema);

//export model
module.exports = Request;