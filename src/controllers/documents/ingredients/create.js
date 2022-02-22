const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../services/documents/ingredients');
const { createdSuccessfully, registered } = require('../../statusAndMessage');
const { INGREDIENT } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { name, unity, price } = req.body;

  const created = await create({ name, unity, price });

  if (!created) return next(registered(INGREDIENT));

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(INGREDIENT),
      createdIngredient: created,
    });
};
