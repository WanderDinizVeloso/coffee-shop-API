const { OK } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../services/documents/sales');

module.exports = async (_req, res, _next) => {
  const sales = await searchAll();

  return res
    .status(OK)
    .json({ sales });
};
