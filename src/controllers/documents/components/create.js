const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../services/documents/components');
const { createdSuccessfully, registered } = require('../../statusAndMessage');
const { COMPONENT } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { productId, ingredients } = req.body;

  const created = await create({ productId, ingredients });

  if (!created) return next(registered(COMPONENT));

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(COMPONENT),
      createdComponent: created,
    });
};
