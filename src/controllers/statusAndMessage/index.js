const { BAD_REQUEST, NOT_FOUND, UNAUTHORIZED } = require('http-status-codes').StatusCodes;

const internalError = () =>
  'sorry, internal error.';

const invalid = (param) => ({
  status: BAD_REQUEST,
  message: `The invalid '${param}' field.`,
});

const notFound = (param) => ({
  status: NOT_FOUND,
  message: `'${param}' not found.`,
});

const unauthorized = () => ({
  status: UNAUTHORIZED,
  message: 'Request not allowed for this user.',
});

module.exports = {
  internalError,
  invalid,
  notFound,
  unauthorized,
};
