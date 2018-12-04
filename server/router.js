// IMPORTS:
const rootController = require("./controllers/root-controller");
const postsController = require("./controllers/posts-controller");
const aboutsController = require("./controllers/abouts-controller");

// ROUTER:
module.exports = app => {
  // root
  app.get("/", rootController.root);
  // posts controller routes
  app.get("/posts", postsController.posts);
  // abouts controller routes
  app.get("/aboutme", aboutsController.index);
  app.get("/aboutme/all", aboutsController.all);
  app.get("/aboutme/description", aboutsController.description);
  app.get("/aboutme/tech", aboutsController.tech);
  app.get("/aboutme/stack", aboutsController.stack);
  app.get("/aboutme/hobbies", aboutsController.hobbies);
};
