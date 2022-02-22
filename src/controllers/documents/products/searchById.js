const { OK } = require('http-status-codes').StatusCodes;

const { searchById } = require('../../../services/documents/products');
const { notFound } = require('../../statusAndMessage');
const { PRODUCT } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { cost } = req.query;

  const product = await searchById({ id, cost });

  if (!product) return next(notFound(PRODUCT));

  return res
    .status(OK)
    .json({ product });
};
