const mongoose = require("mongoose");
const fakerSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: String,
  city: String,
  avatar: String,
});

module.exports = mongoose.model("fakerCollection", fakerSchema);

// grab data, store it in your database and display it
