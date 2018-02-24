const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GitHubStrategy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubClientSecret,
      callbackURL: '/auth/github/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ githubId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ githubId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
