const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('./login').User;

mongoose.connect('mongodb://localhost:27017/animationsdb');

router.get('/', async(req, res) => {
    await User.findOne({ username: req.query.username }, (err, result) => {
        if (result) {
            // when user goes to his profile we send him the list of animations he liked
            // list is stored in array at db, field likedAnimations
            res.send({ animationList: result.likedAnimations });
            console.log("Lajkovane animacije:", result.likedAnimations);
        }
    });
});

router.put('/', async(req, res) => {
    console.log("Username:", req.body.username);
    console.log("Password:", req.body.link);
    // await User.findOneAndUpdate({
    //     username: req.body.username
    // }, {
    //     likedAnimations: User.findOne({ username: req.query.username }, (err, result) => {
    //         return result.likedAnimations.push(req.body.link)
    //     })
    // });
});

module.exports = router;