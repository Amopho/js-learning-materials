// Schema building

const mongoose = require("mongoose");
const employeesDataSchema = new mongoose.Schema({
  // definitions options
  name: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// ypou can go with already build colection or you can build the new one, to creta new collection:

// module.exports = mongoose.model("E")

// E... -capital letter - its a module now- like a class in JS, than creating a new collection , employeesDataSchema;
