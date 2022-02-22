const admAuthorization = require('./auth/admAuthorization');
const userAuthorization = require('./auth/userAuthorization');
const authentication = require('./auth/authentication');
const error = require('./error');
const wrapper = require('./wrapper');
const upload = require('./upload');
const validateLogin = require('./validations/validateLogin');
const validateUsers = require('./validations/validateUsers');
const validateProducts = require('./validations/validateProducts');
const validateIngredients = require('./validations/validateIngredients');
const validateSales = require('./validations/validateSales');
const validateComponents = require('./validations/validateComponents');

module.exports = {
  admAuthorization,
  userAuthorization,
  authentication,
  error,
  wrapper,
  upload,
  validateLogin,
  validateUsers,
  validateProducts,
  validateIngredients,
  validateSales,
  validateComponents,
};
