const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/github',
    passport.authenticate('github', { scope: ['offline_access'] })
  );

  app.get('/auth/github/callback', passport.authenticate('github'));
};
