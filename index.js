const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const keys = require('./config/keys');

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

passport.use(
  new GitHubStrategy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubClientSecret,
      callbackURL: '/auth/github/callback',
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', passport.authenticate('github'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
