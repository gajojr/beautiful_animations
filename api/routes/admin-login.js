const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('users', userSchema);

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'public', 'admin_login', 'admin-login.html')));

router.post('/', async(req, res) => {
    await User.findOne({ username: req.body.username, password: req.body.password }, (err, result) => {
        if (result) {
            res.sendStatus(200);
        } else {
            res.sendStatus(201);
        }
    });
});

router.put('/change-password', async(req, res) => {
    console.log(req.body.username);
    console.log(req.body.oldPassword);
    console.log(req.body.newPassword);
    await User.findOneAndUpdate({
        username: req.body.username,
        password: req.body.oldPassword
    }, {
        username: req.body.username,
        password: req.body.newPassword
    });
});


module.exports = router;