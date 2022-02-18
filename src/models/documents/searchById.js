const { ObjectId } = require('mongodb');

const connection = require('../connection');

module.exports = async (collection, id, attributesConfig = {}) => {
  const entity = (await connection())
    .collection(collection)
    .findOne(ObjectId(id), attributesConfig);

  return entity;
};
