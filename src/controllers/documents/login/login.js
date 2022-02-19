const { OK } = require('http-status-codes').StatusCodes;

const { login } = require('../../../services/documents/login');
const { invalid } = require('../../statusAndMessage');
const { EMAIL_OR_PASSWORD } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const token = await login({ email, password });

  if (!token) {
    return next(invalid(EMAIL_OR_PASSWORD));
  }

  return res
    .status(OK)
    .json({ token });
};
