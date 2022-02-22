const { INTERNAL_SERVER_ERROR, BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { internalError } = require('../../statusAndMessage');

module.exports = async (err, _req, res, _next) => {
  const { status = null, message } = err;
  
  if (status) {
    return res
      .status(status)
      .json({ error: { message } });
  }

  if (err.isJoi === true) {
    return res
      .status(BAD_REQUEST)
      .json({ error: {
        message,
        context: err.details[0].context,
      } });
  }

  return res
    .status(INTERNAL_SERVER_ERROR)
    .json({ error: { message: internalError() } });
};
