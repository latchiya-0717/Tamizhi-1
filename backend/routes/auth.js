const express = require("express");
const router = express.Router();

// Sample login route
router.post("/login", (req, res) => {
  res.json({ message: "Login endpoint hit!" });
});

// Sample signup route
router.post("/signup", (req, res) => {
  res.json({ message: "Signup endpoint hit!" });
});

module.exports = router;
