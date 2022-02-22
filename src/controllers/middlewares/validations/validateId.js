const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const { schemas } = require('../../../utils/validationsSchema');

const schema = Joi.object({
  id: schemas.idRequired,
});

module.exports = async (req, _res, next) => {
  try {
    await schema.validateAsync(req.params);
  } catch (err) {
    next(err);
  }

  return next();
};
