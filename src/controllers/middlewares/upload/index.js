const multer = require('multer');
const path = require('path');

const { STORAGE_TYPE } = process.env;

const destination = path.resolve(__dirname, '../../../../temp/images');

const { renameImageName } = require('../../../services/functions');
const { invalidImageType } = require('../../statusAndMessage');
const { IMAGE } = require('../../../utils/strings');
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
    fileFilter: (_reqFile, file, callback) => {
      const allowedMimes = imageTypeList;

      if (allowedMimes.includes(file.mimetype)) {
        return callback(null, true);
      }
       return callback(invalidImageType(IMAGE));
    },
  });
