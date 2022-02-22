const { OK } = require('http-status-codes').StatusCodes;

const { update } = require('../../../services/documents/users');
const { modifiedSuccessfully, notFound, registered } = require('../../statusAndMessage');
const { USER, EMAIL_EXIST, NEW_EMAIL } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { role } = req.user;
  const { id } = req.params;
  const { fullName, email, password } = req.body;

  const updated = await update({ id, fullName, email, password, masterRole: role });

  if (!updated) {
    return next(notFound(USER));
  }

  if (updated === EMAIL_EXIST) {
    return next(registered(NEW_EMAIL));
  }

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(USER),
      updatedUser: updated,
    });
};
