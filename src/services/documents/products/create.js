const { ObjectId } = require('mongodb');

const { PRODUCTS } = require('../../../utils/strings');
const { search, create } = require('../../../models')(PRODUCTS);
const { setDecimalPlaces } = require('../../functions');
const { filterField } = require('../../../utils/pipelines');
const { DECIMAL_PLACES_PRICE } = require('../../../utils/magicNumbers');

module.exports = async ({ name, price }) => {
  const productsExistsOnDatabase = (await search(filterField({ name })))[0];

  if (productsExistsOnDatabase) {
    return null;
  }

  const { insertedId } = await create({
    name,
    price: setDecimalPlaces(price, DECIMAL_PLACES_PRICE),
  });

  const newProducts = (
    await search(filterField({ _id: ObjectId(insertedId) }))
  )[0];

  return newProducts;
};
