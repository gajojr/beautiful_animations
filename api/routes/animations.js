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
            //docs.forEach(item => console.log(item.linkToAnimationPage))
            res.json({ animations: docs });
        }
    });
});

const connect = () => {
    /*const animation = new Animation({
        name: "Neka animacija",
        gifAdrress: "/images/animation_gifs/placeholder.jfif",
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