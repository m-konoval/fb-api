const express = require('express');
const router = express.Router();
const FacebookAuth = require('../passport/FacebookAuth');

router.get('/facebook',
    FacebookAuth.authenticate('facebook'));

router.get('/facebook/callback',
    FacebookAuth.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/');
    });

module.exports = router;