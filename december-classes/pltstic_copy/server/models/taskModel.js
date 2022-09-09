const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide task name"],
      trim: true,
      maxlength: [100, "Task must be less than 100 characters"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    completed: { type: Boolean, default: false },
    taskAddedDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    dueDate: {
      type: Date,
      required: false,
      // default: Date.now,
    },
    taskCompletedDate: {
      type: Date,
      required: false,
      // default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
