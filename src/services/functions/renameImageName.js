const { IMAGE_FORMAT_POSITION } = require('../../utils/magicNumbers');
const { IMAGE_STRING_SEPARATOR } = require('../../utils/strings');

module.exports = (id, file) => {
  const { originalname: originalName } = file;
  const imageFormat = (originalName.split(IMAGE_STRING_SEPARATOR))[IMAGE_FORMAT_POSITION];

  const newImageName = `${id}.${imageFormat}`;

  return newImageName;
};
