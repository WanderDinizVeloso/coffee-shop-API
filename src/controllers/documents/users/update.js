const { OK } = require('http-status-codes').StatusCodes;

const { update } = require('../../../services/documents/users');
const { modifiedSuccessfully, notFound } = require('../../statusAndMessage');
const { USER } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { fullName, email, password } = req.body;

  const updated = await update({ id, fullName, email, password });

  if (!updated) {
    return next(notFound(USER));
  }

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(USER),
      updatedUser: updated,
    });
};
