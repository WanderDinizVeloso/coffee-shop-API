const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../services/documents/products');
const { createdSuccessfully, registered } = require('../../statusAndMessage');
const { PRODUCT } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { name, price } = req.body;

  const created = await create({ name, price });

  if (!created) {
    return next(registered(PRODUCT));
  }

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(PRODUCT),
      createdProduct: created,
    });
};
