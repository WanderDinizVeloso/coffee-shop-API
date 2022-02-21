const { ObjectId } = require('mongodb');

const { COMPONENTS } = require('../../../utils/strings');
const { search, update } = require('../../../models')(COMPONENTS);
const { setDecimalPlaces } = require('../../functions');
const { filterField } = require('../../../utils/pipelines');
const { DECIMAL_PLACES_QUANTITY } = require('../../../utils/magicNumbers');

module.exports = async ({ id, productId, ingredients }) => {
  const component = (await search(filterField({ _id: ObjectId(id) })))[0];

  if (!component) {
    return null;
  }

  const newIngredientsData = ingredients.map(({ _id, quantity }) => ({
    _id,
    quantity: setDecimalPlaces(quantity, DECIMAL_PLACES_QUANTITY),
  }));
 
  await update({
    ...component,
    productId,
    ingredients: newIngredientsData,
  });

  const newComponentData = (await search(filterField({ _id: ObjectId(id) })))[0];

  return { newData: newComponentData };
};
