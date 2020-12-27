const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('./login').User;

mongoose.connect('mongodb://localhost:27017/animationsdb');

router.get('/', async(req, res) => {
    // potrebno implementirati atomicke operacije
    try {
        const result = await User.findOne({ username: req.query.username });
        if (result) {
            console.log("Liked animations:", result.likedAnimations);
            res.send({ animationList: result.likedAnimations });
        } else {
            console.log("no database result found");
            res.sendStatus(404);
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/', async(req, res) => {
    console.log("username:", req.body.username);
    console.log("link:", req.body.link);

    // if animation is already liked, then dislike it
    // if it's not liked, then store it in db

    try {
        const user = await User.findOne({ username: req.body.username });
        if (user.likedAnimations.indexOf(req.body.link) === -1) {
            user.likedAnimations.push(req.body.link);
        } else {
            user.likedAnimations = arrayRemove(user.likedAnimations, user.likedAnimations[user.likedAnimations.indexOf(req.body.link)]);
        }
        user.save();
    } catch (error) {
        console.log("Error on put request(animation-list)", error);
    }
});

function arrayRemove(arr, value) {
    return arr.filter((item) => {
        return item !== value;
    });
}

module.exports = router;