const { OK } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../services/documents/ingredients');
const { deletedSuccessfully, notFound } = require('../../statusAndMessage');
const { INGREDIENT } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const removed = await remove({ id });

  if (!removed) return next(notFound(INGREDIENT));

  return res
    .status(OK)
    .json({
      message: deletedSuccessfully(INGREDIENT),
      deletedIngredients: removed,
    });
};
