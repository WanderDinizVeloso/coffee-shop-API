const { ObjectId } = require('mongodb');

const { PRODUCTS, NAME_EXIST } = require('../../../utils/strings');
const { search, update } = require('../../../models')(PRODUCTS);
const { setDecimalPlaces, checkNewNameOnDatabase } = require('../../functions');
const { filterField } = require('../../../utils/pipelines');
const { DECIMAL_PLACES_PRICE } = require('../../../utils/magicNumbers');

module.exports = async ({ id: _id, name, price }) => {
  const product = (await search(filterField({ _id: ObjectId(_id) })))[0];

  if (!product) {
    return null;
  }

  const newNameExistsOnDatabase = await checkNewNameOnDatabase(name, product.name, search);

  if (newNameExistsOnDatabase) {
    return NAME_EXIST;
  }
  
  await update({
    _id,
    name,
    price: setDecimalPlaces(price, DECIMAL_PLACES_PRICE),
  });

  const newProductData = (await search(filterField({ _id: ObjectId(_id) })))[0];

  return { newData: newProductData };
};
