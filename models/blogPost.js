const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
  title: String,
  body: String
});

// Model
const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

module.exports = BlogPost;
