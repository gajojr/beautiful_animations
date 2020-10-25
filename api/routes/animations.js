const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.redirect('"http://localhost:3000');
});

module.exports = router;