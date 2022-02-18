const connection = require('../connection');

module.exports = async (collection, field = {}, attributesConfig = {}) => {
  const entity = (await connection())
    .collection(collection)
    .findOne(field, attributesConfig);

  return entity;
};
