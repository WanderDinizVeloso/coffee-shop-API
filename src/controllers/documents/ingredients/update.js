const { OK } = require('http-status-codes').StatusCodes;

const { update } = require('../../../services/documents/ingredients');
const { notFound, registered, modifiedSuccessfully } = require('../../statusAndMessage');
const { INGREDIENT, NAME_EXIST, NEW_NAME } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { name, unity, quantity, price } = req.body;

  const updated = await update({ id, name, unity, quantity, price });

  if (!updated) {
    return next(notFound(INGREDIENT));
  }

  if (updated === NAME_EXIST) {
    return next(registered(NEW_NAME));
  }

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(INGREDIENT),
      updatedIngredient: updated,
    });
};
