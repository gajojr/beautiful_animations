const express = require("express");
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose");
const User = require("./login").User;
// const storage = require('node-sessionstorage');
const bcrypt = require("bcryptjs");
const keys = require("../config/key");
const jwt = require("jsonwebtoken");
mongoose.connect("mongodb://localhost:27017/animationsdb");

// router.get("/", (req, res) =>
//   res.sendFile(
//     path.join(__dirname, "..", "public", "register-user", "register.html")
//   )
// );

router.post("/", async (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              // after they are registered send them a token
              bcrypt
                .compare(req.body.password, user.password)
                .then((isMatch) => {
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
            })
            .catch((err) => console.log(err));
        });
      });
    }
  }); //end of User finding email and registering
});
module.exports = router;
// await User.findOne({ username: req.body.username, password: req.body.password }, (err, result) => {
//     if (result) {
//         // send status to frontend, if user with same name exists than let the user know, else add it to users table in db
//         res.sendStatus(200);
//         console.log('Ima ovakav');
//     } else {
//         res.sendStatus(201);
//         console.log('Nema ovakav');

//         storage.setItem('username', req.body.username);

//         const newUser = new User({
//             username: req.body.username,
//             password: req.body.password,
//             role: "user",
//             likedAnimations: []
//         });

//         newUser.save(function(err, user) {
//             if (err) return console.error(err);
//             console.log(user.username + " saved to user collection.");
//         });
//     }
// });
