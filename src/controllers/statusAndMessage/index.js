const { BAD_REQUEST, NOT_FOUND, UNAUTHORIZED, CONFLICT } = require('http-status-codes').StatusCodes;

const createdSuccessfully = (param) =>
  `'${param}' created successfully.`;

const deletedSuccessfully = (param) =>
`'${param}' deleted successfully,`;

const modifiedSuccessfully = (param) =>
  `'${param}' modified successfully.`;

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

const invalidType = (param) => ({
  status: BAD_REQUEST,
  message: `Invalid ${param} type.`,
});

const invalidSize = (param) => ({
  status: BAD_REQUEST,
  message: `Invalid ${param} size.`,
});

const insufficientStock = (param) => ({
  status: BAD_REQUEST,
  message: `Insufficient stock of ingredients: ${param}`,
});

module.exports = {
  internalError,
  invalid,
  notFound,
  unauthorized,
  createdSuccessfully,
  registered,
  deletedSuccessfully,
  modifiedSuccessfully,
  invalidType,
  invalidSize,
  insufficientStock,
};
