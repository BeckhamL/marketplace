const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
  name: String,
  email: String,
  message: String
});

// Model
const Messages = mongoose.model("Message", MessageSchema);

module.exports = Messages;
