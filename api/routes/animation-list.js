const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose');
const User = require('./login').User;

mongoose.connect('mongodb://localhost:27017/animationsdb');

router.get('/', async(req, res) => {
    console.log("Query: ", req.query.username)
    await User.findOne({ username: req.query.username }, (err, result) => {
        if (result) {
            // when user goes to his profile we send him the list of animations he liked
            // list is stored in array at db, field likedAnimations
            res.send(result.likedAnimations);
            console.log('Pronasao po imenu: ', result.username);
        } // else {
        //     res.sendStatus(201);
        //     console.log('Nema ovakav');

        //     const newUser = new User({
        //         username: req.body.username,
        //         password: req.body.password,
        //         role: "user",
        //         likedAnimations: []
        //     });

        //     newUser.save(function(err, user) {
        //         if (err) return console.error(err);
        //         console.log(user.username + " saved to user collection.");
        //     });
        // }
    });
});

module.exports = router;