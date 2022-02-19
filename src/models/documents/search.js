const connection = require('../connection');

module.exports = async (collection, pipeline) => {
  const search = (await connection())
    .collection(collection)
    .aggregate(pipeline)
    .toArray();

  return search;
};
