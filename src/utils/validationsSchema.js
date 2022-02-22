const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const schemas = {
  email: Joi
    .string()
    .email()
    .lowercase()
    .required(),
  password: Joi
    .string()
    .min(8)
    .regex(/[A-Z]+/)
    .regex(/[0-9]+/)
    .regex(/[!$#%_]+/)
    .required(),
  fullName: Joi
    .string()
    .min(8)
    .required(),
  id: Joi
    .objectId(),
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

module.exports = {
  loginSchema,
  usersSchema,
};
