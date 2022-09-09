const Plant = require("../models/plantModel");
const asyncWrapper = require("../middleware/async");
// Get all plants

const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find({});
    res.status(200).json({ plants });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllPlants,
};

// Create plant

const createPlant = async (req, res) => {
  try {
    const plant = await Plant.create(req.body);
    console.log(req.body);
    res.status(201).json({ plant });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

// Get one plant
const getPlant = async (req, res) => {
  try {
    const { id: plantID } = req.params;
    const plant = await Plant.findOne({ _id: plantID });
    if (!plant) {
      return res.status(404).json({ msg: `No plant with id: ${plantID}` });
    }

    res.status(200).json({ plant });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllPlants,
  createPlant,
  getPlant,
};
