const connection = require('../connection');

module.exports = async (collection, filterConfig = {}, attributesConfig = {}, sortConfig = {}) => {
  const entities = (await connection())
    .collection(collection)
    .find(filterConfig, attributesConfig)
    .sort(sortConfig)
    .toArray();

  return entities;
};
