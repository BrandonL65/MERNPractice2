let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let SchemaPost = new Schema({
  title: String,
  content: String,
  rating: Number
});

module.exports = mongoose.model("Post", SchemaPost);