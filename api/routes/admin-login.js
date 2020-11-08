const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'public', 'admin_login', 'admin-login.html')));

router.post('/', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
    if (req.body.username === 'a1' && req.body.password === 'a2') {
        res.sendStatus(200);
    } else {
        res.sendStatus(201);
    }
});

module.exports = router;