const admAuthorization = require('./auth/admAuthorization');
const authentication = require('./auth/authentication');
const error = require('./error');
const wrapper = require('./wrapper');

module.exports = {
  admAuthorization,
  authentication,
  error,
  wrapper,
};
