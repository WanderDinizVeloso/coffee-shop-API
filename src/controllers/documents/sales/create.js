const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../services/documents/sales');
const { createdSuccessfully, registered } = require('../../statusAndMessage');
const { SALE } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { productId, quantity } = req.body;

  const created = await create({ productId, quantity });

  if (!created) {
    return next(registered(SALE));
  }

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(SALE),
      createdSale: created,
    });
};
