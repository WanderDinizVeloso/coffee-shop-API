const { PRODUCTS, NAME_EXIST } = require('../../../utils/strings');
const { searchById, searchByField, update } = require('../../../models')(PRODUCTS);
const { setDecimalPlaces, checkNewNameOnDatabase } = require('../../functions');
const { DECIMAL_PLACES_PRICE } = require('../../../utils/magicNumbers');

module.exports = async ({ id, name, price }) => {
  const product = await searchById(id);

  if (!product) {
    return null;
  }

  const newNameExists = await checkNewNameOnDatabase(name, product.name, searchByField);

  if (newNameExists) {
    return NAME_EXIST;
  }
  
  await update({
    ...product,
    name,
    price: setDecimalPlaces(price, DECIMAL_PLACES_PRICE),
  });

  const newProductData = await searchById(id);

  return { newData: newProductData };
};
