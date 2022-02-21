const { OK } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../services/documents/components');
const { deletedSuccessfully, notFound } = require('../../statusAndMessage');
const { COMPONENT } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const removed = await remove({ id });

  if (!removed) {
    return next(notFound(COMPONENT));
  }

  return res
    .status(OK)
    .json({
      message: deletedSuccessfully(COMPONENT),
      deletedComponent: removed,
    });
};
