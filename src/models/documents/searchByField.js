const connection = require('../connection');

module.exports = async (collection, fieldConfig = {}) => {
  const entity = (await connection())
    .collection(collection)
    .findOne(fieldConfig);

  return entity;
};
