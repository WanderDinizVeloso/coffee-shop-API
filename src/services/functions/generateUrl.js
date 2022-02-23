const { STORAGE_TYPE } = process.env;

const { LOCAL } = require('../../utils/strings');

module.exports = (req) => {
  const {
    headers: { host }, file: { location }, protocol, imageName: image,
  } = req;

  let url;

  if (STORAGE_TYPE === LOCAL) {
    url = `${protocol}://${host}/images/${image}`;
  } else {
    url = location;
  }

  return url;
};
