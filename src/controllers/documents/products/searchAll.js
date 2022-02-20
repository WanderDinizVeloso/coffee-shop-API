const { OK } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../services/documents/products');

module.exports = async (_req, res, _next) => {
  const products = await searchAll();

  return res
    .status(OK)
    .json({ products });
};
