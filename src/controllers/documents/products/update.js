const { OK } = require('http-status-codes').StatusCodes;

const { update } = require('../../../services/documents/products');
const { notFound, registered, modifiedSuccessfully } = require('../../statusAndMessage');
const { PRODUCT, NAME_EXIST, NEW_NAME } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const updated = await update({ id, name, price });

  if (!updated) return next(notFound(PRODUCT));
  if (updated === NAME_EXIST) return next(registered(NEW_NAME));

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(PRODUCT),
      updatedProduct: updated,
    });
};
