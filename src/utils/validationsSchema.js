const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const schemas = {
  emailRequired: Joi
    .string()
    .email()
    .lowercase()
    .required(),
  email: Joi
    .string()
    .email()
    .lowercase(),

  passwordRequired: Joi
    .string()
    .min(8)
    .regex(/[A-Z]+/)
    .regex(/[0-9]+/)
    .regex(/[!$#%_]+/)
    .required(),
  password: Joi
    .string()
    .min(8)
    .regex(/[A-Z]+/)
    .regex(/[0-9]+/)
    .regex(/[!$#%_]+/),

  fullNameRequired: Joi
    .string()
    .min(8)
    .required(),
  fullName: Joi
  .string()
  .min(8),

  idRequired: Joi
    .objectId()
    .required(),
  id: Joi
    .objectId(),
  
  nameRequired: Joi
    .string()
    .min(5),
  name: Joi
    .string()
    .min(5),
  
  unitaryRequired: Joi
    .string()
    .min(3)
    .required(),
  unitary: Joi
    .string()
    .min(3),

  valuesRequired: Joi
    .number()
    .positive()
    .required(),
  values: Joi
    .number()
    .positive(),

  quantityRequired: Joi
    .number()
    .positive()
    .required(),
  quantity: Joi
    .number()
    .positive(),

  ingredientsRequired: Joi
    .array()
      .items({
        id: Joi
          .objectId()
          .required(),
        name: Joi
          .string()
          .min(5)
          .required(),
        quantity: Joi
          .number()
          .positive()
          .required(),
      }),
  ingredients: Joi
  .array()
    .items({
      id: Joi
        .objectId()
        .required(),
      name: Joi
        .string()
        .min(5),
      quantity: Joi
        .number()
        .positive(),
    }),
};

module.exports = {
  schemas,
};
