const { OK } = require('http-status-codes').StatusCodes;

const { searchById } = require('../../../services/documents/components');
const { notFound } = require('../../statusAndMessage');
const { COMPONENT } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const component = await searchById({ id });

  if (!component) return next(notFound(COMPONENT));

  return res
    .status(OK)
    .json({ component });
};
