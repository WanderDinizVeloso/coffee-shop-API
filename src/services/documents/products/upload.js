const { ObjectId } = require('mongodb');

const { PRODUCTS } = require('../../../utils/strings');
const { search, update } = require('../../../models')(PRODUCTS);
const { filterField } = require('../../../utils/pipelines');

module.exports = async ({ id: _id, url }) => {
  const product = (await search(filterField({ _id: ObjectId(_id) })))[0];

  if (!product) {
    return null;
  }
  
  await update({ ...product, image: url });

  const newProductData = (await search(filterField({ _id: ObjectId(_id) })))[0];

  return { newData: newProductData };
};
