const userController = require("../api/Controller/User/user.controller");
const tasksController = require("../api/Controller/Tasks/tasks.controller");
const projectsController = require("../api/Controller/Projects/projects.controller");

const initialize = (app) => {
  app.use("/api/v1/user", userController);
  app.use("/api/v1/tasks", tasksController);
  app.use("/api/v1/projects", projectsController);
};
module.exports = { initialize };
