const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('users', userSchema);

router.get('/', async(req, res) => {
    await User.find({}, (err, docs) => {
        if (err) {
            res.json(err);
        } else {
            res.json({ animations: docs });
        }
    });
});

module.exports = mongoose.model('users', userSchema);;