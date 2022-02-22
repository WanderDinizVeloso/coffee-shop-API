const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const { schemas } = require('../../../utils/validationsSchema');
const { PUT } = require('../../../utils/strings');

const schema = Joi.object({
  fullName: schemas.fullNameRequired,
  email: schemas.emailRequired,
  password: schemas.passwordRequired,
});

const schemaUpdate = Joi.object({
  fullName: schemas.fullName,
  email: schemas.email,
  password: schemas.password,
});

module.exports = async (req, _res, next) => {
  try {
    if (req.method === PUT) {
      await schemaUpdate.validateAsync(req.body);
    } else {
      await schema.validateAsync(req.body);
    }
  } catch (err) {
    next(err);
  }

  return next();
};
