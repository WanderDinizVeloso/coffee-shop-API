const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const { schemas } = require('../../../utils/validationsSchema');

const loginSchema = Joi.object({
  email: schemas.emailRequired,
  password: schemas.passwordRequired,
});

module.exports = async (req, _res, next) => {
  try {
    await loginSchema.validateAsync(req.body);
  } catch (err) {
    next(err);
  }

  return next();
};
