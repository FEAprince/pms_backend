const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.category = (req, res, next) => {
  try {
    if (req.body) {
      const schema = Joi.object({
        categoryName: Joi.string().required()
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
