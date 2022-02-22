const { INGREDIENTS } = require('../../../utils/strings');
const { searchByField, searchById, create } = require('../../../models')(INGREDIENTS);
const { setDecimalPlaces } = require('../../functions');
const {
  DECIMAL_PLACES_PRICE, INITIAL_QUANTITY,
} = require('../../../utils/magicNumbers');

module.exports = async ({ name, unity, price }) => {
  const ingredientExistsOnDatabase = await searchByField({ name });

  if (ingredientExistsOnDatabase) {
    return null;
  }

  const { insertedId } = await create({
    name,
    unity,
    quantity: INITIAL_QUANTITY,
    price: setDecimalPlaces(price, DECIMAL_PLACES_PRICE),
  });

  const newIngredient = await searchById(insertedId);

  return newIngredient;
};
