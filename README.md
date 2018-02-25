## Test github oauth:

https://pure-earth-88880.herokuapp.com/ should return "Cannot GET /" because I don't have a route handler set up for it.

https://pure-earth-88880.herokuapp.com/auth/github should log you in, but return "Cannot GET /auth/github/callback" because I don't have a redirect setup yet.

https://pure-earth-88880.herokuapp.com/api/current_user will return a JSON with the user id & githubId

https://pure-earth-88880.herokuapp.com/api/logout will log you out & return a blank page. Visiting https://pure-earth-88880.herokuapp.com/api/current_user again should give you a blank page.

##### Running locally

Clone the repo,
install dependencies with yarn,
create a dev.js file in the config directory (use prod.js as a guide)
& do "yarn dev" in a terminal.

You should be able to navigate to http://localhost:5000 , adding /auth/github, /api/current_user or /api/logout according to what you want to do.
