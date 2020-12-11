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
    console.log("username:", req.body.username);
    console.log("link:", req.body.link);

    // if animation is already liked, then dislike it
    // if it's not liked, then store it in db
    const user = await User.findOne({ username: req.body.username });
    if (user.likedAnimations.indexOf(req.body.link) === -1) {
        user.likedAnimations.push(req.body.link);
    } else {
        user.likedAnimations = arrayRemove(user.likedAnimations, user.likedAnimations[user.likedAnimations.indexOf(req.body.link)]);
    }
    user.save();

    // res.send({ animationList: user.likedAnimations });
});

function arrayRemove(arr, value) {
    return arr.filter((item) => {
        return item != value;
    });
}

module.exports = router;