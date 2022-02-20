const multer = require('multer');
const path = require('path');

const { STORAGE_TYPE } = process.env;

const destination = path.resolve(__dirname, '../../../../temp/images');

const { renameImageName, stringInNumber } = require('../../../services/functions');
const { invalidType, invalidSize } = require('../../statusAndMessage');
const { IMAGE, CONTENT_LENGTH } = require('../../../utils/strings');
const { imageTypeList } = require('../../../utils/lists');
const { IMAGE_MAX_SIZE } = require('../../../utils/magicNumbers');

const storageTypes = {
  local: multer.diskStorage({
    destination: (_req, _file, callback) => {
      callback(null, destination);
    },
    filename: (req, file, callback) => {
      const { id } = req.params;
  
      const newImageName = renameImageName(id, file);
  
      req.imageName = newImageName;
  
      callback(null, newImageName);
    },
  }),
};

module.exports = multer({
    dest: destination,
    storage: storageTypes[STORAGE_TYPE],
    limits: {
      fileSize: IMAGE_MAX_SIZE,
    },
    fileFilter: (req, file, callback) => {
      const imageLength = stringInNumber(req.headers[CONTENT_LENGTH]);
      const allowedMimes = imageTypeList;

      if (imageLength > IMAGE_MAX_SIZE) {
        return callback(invalidSize(IMAGE));
      }

      if (!allowedMimes.includes(file.mimetype)) {
        return callback(invalidType(IMAGE));
      }

      return callback(null, true);
    },
  });
