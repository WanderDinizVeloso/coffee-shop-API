const { OK } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../services/documents/components');

module.exports = async (_req, res, _next) => {
  const components = await searchAll();

  return res
    .status(OK)
    .json({ components });
};
