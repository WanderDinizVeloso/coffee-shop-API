const connection = require('../connection');

module.exports = async (collection, filter = {}, sort = {}) => {
  const entities = (await connection())
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return entities;
};
