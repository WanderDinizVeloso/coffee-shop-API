const { ObjectId } = require('mongodb');

const { PRODUCTS } = require('../../../utils/strings');
const { search, update } = require('../../../models')(PRODUCTS);
const { filterField } = require('../../../utils/pipelines');

module.exports = async ({ id: _id, image, originalUrl }) => {
  const product = (await search(filterField({ _id: ObjectId(_id) })))[0];

  if (!product) {
    return null;
  }

  const imageDestination = `${originalUrl}/${image}`;
  
  await update({ ...product, image: imageDestination });

  const newProductData = (await search(filterField({ _id: ObjectId(_id) })))[0];

  return { newData: newProductData };
};
