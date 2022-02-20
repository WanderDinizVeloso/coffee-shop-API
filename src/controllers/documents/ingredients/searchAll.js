const { OK } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../services/documents/ingredients');

module.exports = async (_req, res, _next) => {
  const ingredients = await searchAll();

  return res
    .status(OK)
    .json({ ingredients });
};
