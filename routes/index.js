const userController = require("../api/Controller/User/user.controller");
const tasksController = require("../api/Controller/Tasks/tasks.controller");
const projectsController = require("../api/Controller/Projects/projects.controller");
const categoryController = require("../api/Controller/Category/category.controller");

const initialize = (app) => {
 
  app.use("/api/v1/user", userController);
  app.use("/api/v1/tasks", tasksController);
  app.use("/api/v1/projects", projectsController);
  app.use("/api/v1/category", categoryController);
};
module.exports = { initialize };
