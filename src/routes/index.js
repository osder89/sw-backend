const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');

//vista de bienvenida
router.get('/', (req, res) => {
    res.render('index');
    // res.send('hello word');
});

module.exports = router;