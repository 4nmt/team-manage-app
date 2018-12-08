const routes = require("next-routes");

// define named routes
module.exports = routes()
  .add("projects", "/projects/:id", "project")
  .add("index", "users/:id", "user");
