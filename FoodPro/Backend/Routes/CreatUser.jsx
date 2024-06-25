const express = require("express");
const router = express.Router();
const User = require("../Models/User.jsx");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "itsforthetoken#@itsforthetoken#@";

router.post(
  "/createuser",
  [
    body("email").isEmail().withMessage("Invalid email address"),
    body("name")
      .isLength({ min: 5 })
      .withMessage("Name must be at least 5 characters long"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors
          .array()
          .map((err) => err.msg)
          .join(", "),
      });
    }

    const salt = await bcrypt.genSalt(6);
    const secPassword = await bcrypt.hash(req.body.password, salt)

    try {
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: "Email already exists" });
      }

      // Create new user
      const newUser = new User({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });

      await newUser.save();
      res.json({ success: true, message: "User created successfully" });

    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

// ********************************************************************************

router.post(
  "/LogIn",
  [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors
          .array()
          .map((err) => err.msg)
          .join(", "),
      });
    }
    try {
      const { email, password } = req.body;
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res
          .status(400)
          .json({ success: false, message: "Email didn't exist" });
      }

      if (password !== existingUser.password) {
        return res
          .status(400)
          .json({ success: false, message: "Incorrect password" });
      }

      const data = {
        user: {
          id: existingUser.id,
        },
      };

      const authToken = jwt.sign(data, jwtSecret);
      return res.json({
        success: true,
        authToken: authToken,
        message: "LogIn successfully",
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

module.exports = router;
