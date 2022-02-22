const { PRODUCTS } = require('../../../utils/strings');
const { searchByField, searchById, create } = require('../../../models')(PRODUCTS);
const { setDecimalPlaces } = require('../../functions');
const { DECIMAL_PLACES_PRICE } = require('../../../utils/magicNumbers');

module.exports = async ({ name, price }) => {
  const productExistsOnDatabase = await searchByField({ name });

  if (productExistsOnDatabase) return null;

  const { insertedId } = await create({
    name,
    price: setDecimalPlaces(price, DECIMAL_PLACES_PRICE),
  });

  const newProduct = await searchById(insertedId);

  return newProduct;
};
