const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.projects = (req, res, next) => {
  try {
    if (req.body) {
      const schema = Joi.object({
        projectName: Joi.string().required(),
        projectDescription: Joi.string().required(),
        projectStartDate: Joi.string().required(),
        projectEndDate: Joi.string().required(),
        assignUsers: Joi.array().required(),
        projectStatus: Joi.string().required(),
        categoryId: Joi.objectId().required(),
        daysLeft: Joi.number()
      });

      let data = schema.validate(req.body);
      if (data.error) {
        return res.send(data.error);
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
