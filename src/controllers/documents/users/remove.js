const { OK } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../services/documents/users');
const { deletedSuccessfully, notFound } = require('../../statusAndMessage');
const { USER } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { role } = req.user;
  const { authorization: token } = req.headers;

  const removed = await remove({ id, role, token });

  if (!removed) return next(notFound(USER));

  return res
    .status(OK)
    .json({
      message: deletedSuccessfully(USER),
      deletedUser: removed,
    });
};
