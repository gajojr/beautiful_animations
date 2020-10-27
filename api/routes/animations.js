const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const animationSchema = new mongoose.Schema({
    name: String,
    gifAdrress: String,
    description: String,
    linkToAnimationPage: String
});

const Animation = mongoose.model('animations', animationSchema);

router.get('/', (req, res) => {
    Animation.find({}, (err, docs) => {
        if (err) {
            res.json(err);
        } else {
            res.json({ animations: docs });
        }
    });
});

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/animationsdb', { useNewUrlParser: true, useUnifiedTopology: true });
};

connect();

module.exports = router;