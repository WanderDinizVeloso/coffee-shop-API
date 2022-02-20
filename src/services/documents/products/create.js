const { ObjectId } = require('mongodb');

const { PRODUCTS } = require('../../../utils/strings');
const { search, create } = require('../../../models')(PRODUCTS);
const { setDecimalPlaces } = require('../../functions');
const { filterField } = require('../../../utils/pipelines');
const { DECIMAL_PLACES_PRICE } = require('../../../utils/magicNumbers');

module.exports = async ({ name, price }) => {
  const productExistsOnDatabase = (await search(filterField({ name })))[0];

  if (productExistsOnDatabase) {
    return null;
  }

  const { insertedId } = await create({
    name,
    price: setDecimalPlaces(price, DECIMAL_PLACES_PRICE),
  });

  const newProduct = (
    await search(filterField({ _id: ObjectId(insertedId) }))
  )[0];

  return newProduct;
};
