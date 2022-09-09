const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  userName: {
    type: String,
    required: "Provide an user name",
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: "Provide a valiable password",
    trim: true,
  },
  role: String,
  avatar: String,
});
const User = mongoose.model("User", userSchema);

module.exports = User;
