const { OK } = require('http-status-codes').StatusCodes;

const { update } = require('../../../services/documents/components');
const { notFound, modifiedSuccessfully } = require('../../statusAndMessage');
const { COMPONENT } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { productId, ingredients } = req.body;

  const updated = await update({ id, productId, ingredients });

  if (!updated) return next(notFound(COMPONENT));

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(COMPONENT),
      updatedComponent: updated,
    });
};
