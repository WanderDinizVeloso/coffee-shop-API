const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const { schemas } = require('../../../utils/validationsSchema');
const { PUT } = require('../../../utils/strings');

const schema = Joi.object({
  productId: schemas.idRequired,
  quantity: schemas.valuesRequired,
});

const schemaUpdate = Joi.object({
  productId: schemas.id,
  quantity: schemas.values,
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
