const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());

const UserModel = require("./model/user");

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });

// Middleware get user by id
// await
// findOne({_id:})
// findById(req.params.id)
// No user (404)
// next()
const getUserByID = async (req, res, next) => {
  const userByID = await UserModel.findById({ _id: req.params.id });
  try {
    if (!userByID) {
      // no user
      return res.status(404).json({ message: "User not found" });
      // and stop listening there , break up connection
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
  // throw the result, stop listening and go farther
  res.user = userByID;
  next();
};
//
// Get all
app.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
    // 500 interior server error
  }
});

// Add new one
app.post("/", async (req, res) => {
  try {
    // add city and name
    const newUser = new UserModel({
      name: req.body.name,
      city: req.body.city,
    });
    const user = await newUser.save();
    // user.user
    res.status(201).json({ message: "New user been added", user });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

// GET one by ID
app.get("/:id", getUserByID, async (req, res) => {
  try {
    res.status(200).json(res.user);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

// patch one
app.patch("/:id", getUserByID, async (req, res) => {
  try {
    const userByID = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name || res.user.name,
        city: req.body.city || res.user.city,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ message: "Updated", userByID });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

// delete one
app.delete("/:id", getUserByID, async (req, res) => {
  try {
    // mongoose option - findByIdAndDelete()
    const deletedUserById = await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: `User ${deletedUserById} has been deleted`,
      deletedUserById,
    });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

///////////////////////////////////////////
//
// Practice- see only one specific data- like a name for example

// GET one by ID and select only one value- name

module.exports = app;
