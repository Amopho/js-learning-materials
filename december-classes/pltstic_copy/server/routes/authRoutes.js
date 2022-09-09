const express = require("express");
const router = express.Router();

const {
  login,
  register,
  forgotPassword,
  resetPasswordGet,
  resetPasswordPost,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

router.get("/forgot-password", forgotPassword);
router.post("/forgot-password", forgotPassword);
router.get("/reset-password", resetPasswordGet);
router.post("/reset-password", resetPasswordPost);

module.exports = router;
