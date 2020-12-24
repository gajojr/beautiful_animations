const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose');
const User = require('./login').User;

mongoose.connect('mongodb://localhost:27017/animationsdb');

router.post('/', async(req, res) => {
    console.log("USername mi je :", req.body.username);
    console.log("Sifra mi je :", req.body.password);
    await User.findOne({ username: req.body.username }, (err, result) => {
        if (result) {
            // send status to frontend, if user with same name exists than let the user know, else add it to users table in db 
            res.sendStatus(202);
            console.log('Ima ovakav');
        } else {
            res.sendStatus(201);
            console.log('Nema ovakav');

            const newUser = new User({
                username: req.body.username,
                password: req.body.password,
                role: "user",
                likedAnimations: []
            });

            newUser.save(function(err, user) {
                if (err) return console.error(err);
                console.log(user.username + " saved to user collection.");
            });
        }
    });
});

module.exports = router;