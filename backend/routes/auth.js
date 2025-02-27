const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const SECRET_KEY = process.env.JWT_SECRET;
if (!SECRET_KEY) {
  console.error("❌ JWT_SECRET is missing in .env file");
  process.exit(1);
}

// Registration Endpoint
router.post('/register', async (req, res) => {
  console.log("📩 Register payload received:", req.body);
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "⚠️ All fields are required." });
    }

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "⚠️ User already exists." });
    }

    // Create new user
    user = new User({ name, email, password, role });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    await user.save();
    console.log("✅ User registered successfully:", user);

    // Generate JWT token
    const payload = { user: { id: user.id, role: user.role } };
    jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
      if (err) {
        console.error("❌ Error generating JWT:", err);
        return res.status(500).json({ message: "Server error" });
      }
      res.status(201).json({
        token,
        user: { id: user.id, name: user.name, email: user.email, role: user.role }
      });
    });
  } catch (error) {
    console.error("❌ Registration error:", error.message);
    res.status(500).send("Server error");
  }
});

// Login Endpoint
router.post('/login', async (req, res) => {
  console.log("🔑 Login request received:", req.body);
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "⚠️ Email and password are required." });
    }

    // Find user by email
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "❌ Invalid Credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "❌ Invalid Credentials" });
    }

    // Generate JWT token
    const payload = { user: { id: user.id, role: user.role } };
    jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
      if (err) {
        console.error("❌ Error generating JWT:", err);
        return res.status(500).json({ message: "Server error" });
      }
      res.json({
        token,
        user: { id: user.id, name: user.name, email: user.email, role: user.role }
      });
    });
  } catch (error) {
    console.error("❌ Login error:", error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
