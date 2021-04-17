const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
  title: String,
  author: String,
  content: String,
  shortDescription: String,
  date: Date
});

// Model
const Blogs = mongoose.model("Blog", BlogSchema);

module.exports = Blogs;
