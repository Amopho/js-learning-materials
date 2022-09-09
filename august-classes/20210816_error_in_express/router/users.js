// localhost:5000/users/ (GET PUT POST,...)
const express = require("express");
const router = express.Router();
// root route
// url localhost:5000/users/
router.get("/", (req, res) => {
  res.send("Hey This is users page");
});
// url localhost:5000/users/about
router.get("/about", (req, res) => {
  res.send("This is about");
});

module.exports = router;
