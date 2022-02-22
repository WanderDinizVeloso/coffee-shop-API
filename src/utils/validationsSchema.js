const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const schemas = {
  required: Joi
    .required(),
  email: Joi
    .string()
    .email()
    .lowercase(),
  password: Joi
    .string()
    .min(8)
    .regex(/[A-Z]+/)
    .regex(/[0-9]+/)
    .regex(/[!$#%_]+/),
  fullName: Joi
    .string()
    .min(8),
  id: Joi
    .objectId(),
  name: Joi
    .string()
    .min(5),
  nameRequired: Joi
    .required(),
  unitary: Joi
    .string()
    .min(3),
  unitaryRequired: Joi
    .required(),
  values: Joi
    .number()
    .positive(),
  valuesRequired: Joi
    .required(),
  quantity: Joi
    .number()
    .positive()
    .required(),
  ingredients: Joi
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
};

const { email, password, fullName, id } = schemas;

const loginSchema = Joi.object({
  email,
  password,
});

const usersSchema = Joi.object({
  id,
  fullName,
  email,
  password,
});

const ingredientsSchema = Joi.object({
  id,
  fullName,
  email,
  password,
});

module.exports = {
  schemas,
  loginSchema,
  usersSchema,
  ingredientsSchema,
};
