const { COMPONENTS } = require('../../../utils/strings');
const { searchByField, searchById, create } = require('../../../models')(COMPONENTS);
const { setDecimalPlaces } = require('../../functions');
const { DECIMAL_PLACES_QUANTITY } = require('../../../utils/magicNumbers');

module.exports = async ({ productId, ingredients }) => {
  const componentExistsOnDatabase = await searchByField({ productId });

  if (componentExistsOnDatabase) return null;

  const newIngredientsData = ingredients.map(({ _id, name, quantity }) => ({
    _id,
    name,
    quantity: setDecimalPlaces(quantity, DECIMAL_PLACES_QUANTITY),
  }));

  const { insertedId } = await create({
    productId,
    ingredients: newIngredientsData,
  });

  const newComponent = await searchById(insertedId);

  return newComponent;
};
