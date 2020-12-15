const express = require("express");
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose");

const storage = require("node-sessionstorage");
const keys = require("../config/key");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: String,
  role: String,
  likedAnimations: Array,
});

const User = mongoose.model("users", userSchema);

// router.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "..", "public", "login", "login.html"))
// );

// router.post("/", async (req, res) => {
//   await User.findOne(
//     { username: req.body.username, password: req.body.password },
//     (err, result) => {
//       if (result && result.role === "admin") {
//         storage.setItem("username", result.username);
//         res.sendStatus(200);
//       } else if (result) {
//         storage.setItem("username", result.username);
//         res.sendStatus(201);
//       } else {
//         res.sendStatus(403);
//       }
//     }
//   );
// });

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email,
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.put("/change-password", async (req, res) => {
  await User.findOneAndUpdate(
    {
      username: req.body.username,
      password: req.body.oldPassword,
    },
    {
      password: req.body.newPassword,
    }
  );
});

router.get("/send-data-to-frontend", async (req, res) => {
  if (storage.getItem("username")) {
    //await res.send({ username: storage.getItem('username') });

    await User.findOne(
      { username: storage.getItem("username") },
      (err, result) => {
        if (result) {
          res.send({
            username: result.username,
            likedAnimations: result.likedAnimations,
          });
        }
      }
    );
  }
});

// We need to export User model too, because we are using it in the register-page.js
module.exports = {
  router,
  User,
};
