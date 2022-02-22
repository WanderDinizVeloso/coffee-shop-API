const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const { schemas } = require('../../../utils/validationsSchema');
const { PUT } = require('../../../utils/strings');

const schema = Joi.object({
  productId: schemas.idRequired,
  ingredients: schemas.ingredientsRequired,
});

const schemaUpdate = Joi.object({
  productId: schemas.id,
  ingredients: schemas.ingredients,
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
