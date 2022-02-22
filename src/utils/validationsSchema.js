const Joi = require('@hapi/joi');

const loginSchema = Joi.object({
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
});

module.exports = {
  loginSchema,
};
