const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
  title: String,
  author: String,
  id: Number,
  shortDescription: String,
  content: String
});

// Model
const Blogs = mongoose.model("Blog", BlogSchema);

module.exports = Blogs;
