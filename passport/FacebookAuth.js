const passport = require('passport'),
  FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');

const fbOptions = {
  clientID: "888247601368514",
  clientSecret: "630ab73403c999f9e393353c16d3fded",
  callbackURL: "https://localhost:8443/auth/facebook/callback"
  // ,profileFields: [] // set field to get data from FB fro own profile
}

const fbCallback = function (accessToken, refreshToken, profile, done) {

  console.log('from facebook passport .... ');

  console.log(accessToken, refreshToken, profile, done);
}

passport.use(new FacebookStrategy(fbOptions, fbCallback));

module.exports = passport;