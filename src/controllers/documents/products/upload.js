const { OK } = require('http-status-codes').StatusCodes;

const { upload } = require('../../../services/documents/products');
const { notFound, modifiedSuccessfully } = require('../../statusAndMessage');
const { PRODUCT } = require('../../../utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { imageName: image, originalUrl } = req;

  const updated = await upload({ id, image, originalUrl });

  if (!updated) {
    return next(notFound(PRODUCT));
  }

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(PRODUCT),
      updatedProduct: updated,
    });
};
