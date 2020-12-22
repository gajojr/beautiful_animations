const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const animationSchema = new mongoose.Schema({
    name: String,
    gifAddress: String,
    description: String,
    linkToAnimationPage: String
});

const Animation = mongoose.model('animations', animationSchema);

router.get('/', async(req, res) => {
    await Animation.find({}, (err, docs) => {
        if (err) {
            res.json(err);
        } else {
            res.json({ animations: docs });
        }
    });
});

router.post('/', async(req, res) => {
    const animation = await new Animation({
        name: req.body.name,
        gifAddress: req.body.gifAddress,
        description: req.body.description,
        linkToAnimationPage: req.body.linkToPage
    });
    animation.save(function(err) {
        if (err) return handleError(err);
        // saved!
    });
});

router.put('/', async(req, res) => {
    await Animation.findOneAndUpdate({
        linkToAnimationPage: req.body.linkToFind
    }, {
        name: req.body.name,
        description: req.body.description,
        gifAddress: req.body.gifAddress,
        linkToAnimationPage: req.body.linkToUpdate
    });
});

router.delete('/', async(req, res) => {
    await Animation.findOneAndRemove({ linkToAnimationPage: req.body.linkToDeleteBy }, (err, deletedRecord) => {
        if (!err) {
            console.log(deletedRecord);
        }
    });
});

const connect = () => {
    /*const animation = new Animation({
        name: "Neka animacija",
        gifAddress: "/images/animation_gifs/placeholder.jfif",
        description: "Ide gas",
        linkToAnimationPage: "http://localhost:8080/testAPI"
    });
    animation.save(function(err) {
        if (err) return handleError(err);
        // saved!
    });*/
    return mongoose.connect('mongodb://localhost:27017/animationsdb', { useNewUrlParser: true, useUnifiedTopology: true });
};

connect();

module.exports = router;