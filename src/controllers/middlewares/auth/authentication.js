const { verifyToken } = require('../../../services/auth');
const { invalid, notFound } = require('../../statusAndMessage');
const { TOKEN } = require('../../../utils/strings');

module.exports = async (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next(notFound(TOKEN));
  }

  const user = await verifyToken(authorization);

  if (!user) {
    return next(invalid(TOKEN));
  }

  req.user = user;

  return next();
};
