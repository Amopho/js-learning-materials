const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, ""],
    trim: true,
    /*  maxlength: [20, "task must be less than 20 characters"], */
  },
  completed: { type: Boolean, default: false },
  taskAddedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
