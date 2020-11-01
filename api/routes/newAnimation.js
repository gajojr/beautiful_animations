const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => res.send('dobar dan, moze nova animacija'));

module.exports = router;