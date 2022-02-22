const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const { schemas } = require('../../../utils/validationsSchema');
const { PUT } = require('../../../utils/strings');

const schema = Joi.object({
  name: schemas.nameRequired,
  unity: schemas.unityRequired,
  price: schemas.valuesRequired,
});

const schemaUpdate = Joi.object({
  name: schemas.name,
  unity: schemas.unity,
  quantity: schemas.values,
  price: schemas.values,
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
