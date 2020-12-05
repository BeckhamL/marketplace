const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const WorkshopSchema = new Schema({
  title: String,
  author: String,
  id: Number,
  body: String
});

// Model
const Workshops = mongoose.model("Workshop", WorkshopSchema);

module.exports = Workshops;
