const { OK } = require('http-status-codes').StatusCodes;

const { searchById } = require('../../../services/documents/ingredients');
const { notFound } = require('../../statusAndMessage');
const { INGREDIENT } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  console.log(req.originalUrl);
  const { id } = req.params;

  const ingredient = await searchById({ id });

  if (!ingredient) {
    return next(notFound(INGREDIENT));
  }

  return res
    .status(OK)
    .json({ ingredient });
};
