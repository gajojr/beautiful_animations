require('../db/connect');

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

module.exports = router;