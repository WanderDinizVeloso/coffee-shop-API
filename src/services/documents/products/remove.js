const { ObjectId } = require('mongodb');

const { PRODUCTS } = require('../../../utils/strings');
const { search, remove } = require('../../../models')(PRODUCTS);
const { filterField } = require('../../../utils/pipelines');

module.exports = async ({ id: _id }) => {
  const product = (await search(filterField({ _id: ObjectId(_id) })))[0];

  if (!product) {
    return null;
  }

  await remove(_id);

  return product;
};