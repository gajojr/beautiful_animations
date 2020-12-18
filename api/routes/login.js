const express = require('express');
const router = express.Router();
const path = require('path');

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: String,
    likedAnimations: Array
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model('users', userSchema);

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'public', 'login', 'login.html')));

router.post('/', async(req, res) => {
    await User.findOne({ username: req.body.username }, async(err, result) => {
        if (result) {
            const role = result.role;
            const match = await bcrypt.compare(req.body.password, result.password);
            console.log("Match:", match);
            if (match) {
                if (role === 'admin') {
                    console.log('Found user with admin role');
                    res.sendStatus(200);
                } else {
                    console.log('Found user with user role');
                    res.sendStatus(201);
                }
            } else {
                if (role === 'admin') {
                    console.log('Access denied for admin');
                } else {
                    console.log('Access denied for user');
                }
                res.sendStatus(403);
            }
        } else {
            console.log("No results at all");
            res.sendStatus(403);
        }
    });
});

router.put('/change-password', async(req, res) => {
    await User.findOneAndUpdate({
        username: req.body.username,
        password: req.body.oldPassword
    }, {
        password: req.body.newPassword
    });
});


// We need to export User model too, because we are using it in the register-page.js
module.exports = {
    router,
    User
};