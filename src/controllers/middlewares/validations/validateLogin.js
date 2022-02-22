const { loginSchema } = require('../../../utils/validationsSchema');

module.exports = async (req, _res, next) => {
  try {
    await loginSchema.validateAsync(req.body);
  } catch (err) {
    next(err);
  }

  return next();
};
