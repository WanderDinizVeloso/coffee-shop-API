const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../services/documents/users');
const { createdSuccessfully, registered } = require('../../statusAndMessage');
const { EMAIL, USER } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { fullName, email, password } = req.body;

  const created = await create({ fullName, email, password });

  if (!created) return next(registered(EMAIL));

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(USER),
      createdUser: created,
    });
};
