const passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');

passport.use(new FacebookStrategy({
        clientID: "888247601368514",
        clientSecret: "630ab73403c999f9e393353c16d3fded",
        callbackURL: "/auth/facebook/callback"
    },
    function (accessToken, refreshToken, profile, done) {
        User.findOrCreate(
            { name: profile.displayName },
            { name: profile.displayName, userid: profile.id },
            function (err, user) {
                if (err) { return done(err); }
                done(null, user);
            }
        );
    }
));

module.exports = passport;