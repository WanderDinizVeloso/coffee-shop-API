const admAuthorization = require('./auth/admAuthorization');
const userAuthorization = require('./auth/userAuthorization');
const authentication = require('./auth/authentication');
const error = require('./error');
const wrapper = require('./wrapper');
const upload = require('./upload');
const validateLogin = require('./validations/validateLogin');

module.exports = {
  admAuthorization,
  userAuthorization,
  authentication,
  error,
  wrapper,
  upload,
  validateLogin,
};
