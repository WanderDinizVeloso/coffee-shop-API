const { BAD_REQUEST, NOT_FOUND, UNAUTHORIZED, CONFLICT } = require('http-status-codes').StatusCodes;

const createdSuccessfully = (param) =>
  `'${param}' created successfully.`;

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

const registered = (param) => ({
  status: CONFLICT,
  message: `'${param}' is already.`,
});

module.exports = {
  internalError,
  invalid,
  notFound,
  unauthorized,
  createdSuccessfully,
  registered,
};
