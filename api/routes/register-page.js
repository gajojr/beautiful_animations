const express = require('express');
const router = express.Router();
const path = require('path');
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     username: String,
//     password: String
// });

// const User = mongoose.model('users', userSchema);

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'public', 'register-user', 'register.html')));

router.post('/', async(req, res) => {
    // await User.findOne({ username: req.body.username, password: req.body.password }, (err, result) => {
    //     if (result) {
    //         res.sendStatus(200);
    //     } else {
    //         res.sendStatus(201);
    //     }
    // });
});

module.exports = router;