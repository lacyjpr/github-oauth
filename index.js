const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

const app = express();

passport.use(new GitHubStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
