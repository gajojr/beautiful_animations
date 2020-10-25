const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("Api works properly (sent from express backend)");
});

module.exports = router;