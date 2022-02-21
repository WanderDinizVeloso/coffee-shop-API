const { OK } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../services/documents/products');

module.exports = async (req, res, _next) => {
  const { cost } = req.query;

  const products = await searchAll({ cost });

  return res
    .status(OK)
    .json({ products });
};
