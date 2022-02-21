const { INGREDIENTS } = require('../../../utils/strings');
const { searchByField, searchById, create } = require('../../../models')(INGREDIENTS);
const { setDecimalPlaces } = require('../../functions');
const {
  DECIMAL_PLACES_PRICE, DECIMAL_PLACES_QUANTITY, INITIAL_QUANTITY,
} = require('../../../utils/magicNumbers');

module.exports = async ({ name, unity, price }) => {
  const ingredientExistsOnDatabase = await searchByField({ name });

  if (ingredientExistsOnDatabase) {
    return null;
  }

  const { insertedId } = await create({
    name,
    unity,
    quantity: setDecimalPlaces(INITIAL_QUANTITY, DECIMAL_PLACES_QUANTITY),
    price: setDecimalPlaces(price, DECIMAL_PLACES_PRICE),
  });

  const newIngredient = await searchById(insertedId);

  return newIngredient;
};
