const connection = require('../connection');

module.exports = async (collection, findConfig = {}, sortConfig = {}) => {
  const entities = (await connection())
    .collection(collection)
    .find(findConfig)
    .sort(sortConfig)
    .toArray();

  return entities;
};
