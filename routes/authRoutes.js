const passport = require('passport');

module.exports = app => {
  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/github/callback', passport.authenticate('github'));

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
