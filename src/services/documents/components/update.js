const { COMPONENTS } = require('../../../utils/strings');
const { searchById, update } = require('../../../models')(COMPONENTS);
const { setDecimalPlaces } = require('../../functions');
const { DECIMAL_PLACES_QUANTITY } = require('../../../utils/magicNumbers');

module.exports = async ({ id, productId, ingredients }) => {
  const component = await searchById(id);

  if (!component) {
    return null;
  }

  const newIngredientsData = ingredients.map(({ _id, name, quantity }) => ({
    _id,
    name,
    quantity: setDecimalPlaces(quantity, DECIMAL_PLACES_QUANTITY),
  }));
 
  await update({
    ...component,
    productId,
    ingredients: newIngredientsData,
  });

  const newComponentData = await searchById(id);

  return { newData: newComponentData };
};
