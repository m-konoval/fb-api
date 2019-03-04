const express = require('express');
const router = express.Router();
const FacebookAuth = require('../passport/FacebookAuth');



// On click Loging get facebook login and data
// get params:
// @connect to FB API and get access token
router.get('/facebook',
  FacebookAuth.authenticate('facebook', {
    failureRedirect: '/'
    // ,scope: ['user_posts'] // set scope for user permissions to get data from FB
  }));


// After FB logged this be using for manage responce
// get params:
// @connect to FB API
// @Manage responce from FB API
router.get('/facebook/callback',

  FacebookAuth.authenticate('facebook',
    { failureRedirect: '/' },

    function (req, res) {
      console.log(req, res);
      //res.send('from facebook/callback')
      //res.redirect('/');
      // Database save options
    }
  ));



module.exports = router;