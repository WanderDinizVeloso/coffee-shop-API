const admAuthorization = require('./auth/admAuthorization');
const userAuthorization = require('./auth/userAuthorization');
const authentication = require('./auth/authentication');
const error = require('./error');
const wrapper = require('./wrapper');

module.exports = {
  admAuthorization,
  userAuthorization,
  authentication,
  error,
  wrapper,
};
