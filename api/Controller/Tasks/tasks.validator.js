const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.tasks = (req, res, next) => {
  try {
    if (req.body) {
      const schema = Joi.object({
        tasksName: Joi.string().required(),
        description: Joi.string(),
        taskStartDate: Joi.string().required(),
        taskEndDate: Joi.string().required(),
        taskPriority: Joi.string().required(),
        projectId: Joi.objectId().required(),
        assignUsers: Joi.array().required(),
        tasksStatus: Joi.string(),
      });

      let data = schema.validate(req.body);
      if (data.error) {
        return res.status(400).send(data.error);
      } else {
        next();
      }
    } else {
      return res.send("ERROR HAPPEND");
    }
  } catch (error) {
    return res.send("ERROR HAPPEND");
  }
};
