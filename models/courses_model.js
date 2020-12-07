const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
  title: String,
  author: String,
  id: Number,
  description: String,
  body: String
});

// Model
const Courses = mongoose.model("Course", CourseSchema);

module.exports = Courses;
