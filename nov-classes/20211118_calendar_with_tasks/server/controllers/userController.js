const Users = require("../models/userModel");

// Get all users
const getUsers = async (req, res) => {
  try {
    const user = await Users.find({});
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

// Create new user

const createUser = async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

// Get one user
const getUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    /*  console.log(req.params); */
    const user = await Users.findOne({ _id: userID });
    if (!user) {
      return res.status(404).json({ msg: `No user with id: ${userID}` });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

// Delete one user
const deleteUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await Users.findByIdAndDelete({ _id: userID });
    if (!user) {
      return res.status(404).json({ msg: `No task with id: ${userID}` });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

// Update one user
const updateUser = async (req, res) => {
  try {
    const { id: userID } = req.params;

    const user = await Users.findOneAndUpdate({ _id: userID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ msg: `No user with id: ${userID}` });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
};
