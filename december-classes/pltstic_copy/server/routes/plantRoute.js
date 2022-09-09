const express = require("express");
const router = express.Router();

const {
  getAllPlants,
  createPlant,
  getPlant,
} = require("../controllers/plantsController");

router.route("/").get(getAllPlants).post(createPlant);
router.route("/:id").get(getPlant);
module.exports = router;
