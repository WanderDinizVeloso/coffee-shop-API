const { ObjectId } = require('mongodb');

const connection = require('../connection');

module.exports = async (collection, document) => {
  const { _id, ...documentWithoutId } = document;

  const updated = (await connection())
    .collection(collection)
    .updateOne(
      { _id: ObjectId(_id) },
      { $set: documentWithoutId },
    );

  return updated;
};
