const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const EmailSchema = new Schema({
  email: String
});

// Model
const Email = mongoose.model("Email", EmailSchema);

module.exports = Email;
