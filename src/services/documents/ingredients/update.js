const { INGREDIENTS, NAME_EXIST } = require('../../../utils/strings');
const { searchById, searchByField, update } = require('../../../models')(INGREDIENTS);
const { setDecimalPlaces, checkNewNameOnDatabase } = require('../../functions');
const {
  DECIMAL_PLACES_PRICE, DECIMAL_PLACES_QUANTITY, INITIAL_QUANTITY,
} = require('../../../utils/magicNumbers');

module.exports = async ({ id, name, unity, price }) => {
  const ingredient = await searchById(id);

  if (!ingredient) {
    return null;
  }

  const newNameExists = await checkNewNameOnDatabase(name, ingredient.name, searchByField);

  if (newNameExists) {
    return NAME_EXIST;
  }

  await update({
    ...ingredient,
    name,
    unity,
    quantity: setDecimalPlaces(INITIAL_QUANTITY, DECIMAL_PLACES_QUANTITY),
    price: setDecimalPlaces(price, DECIMAL_PLACES_PRICE),
  });

  const newIngredientData = await searchById(id);

  return { newData: newIngredientData };
};
