const { ObjectId } = require('mongodb');

const { INGREDIENTS } = require('../../../utils/strings');
const { search, create } = require('../../../models')(INGREDIENTS);
const { setDecimalPlaces } = require('../../functions');
const { filterField } = require('../../../utils/pipelines');
const {
  DECIMAL_PLACES_PRICE, DECIMAL_PLACES_QUANTITY, INITIAL_QUANTITY,
} = require('../../../utils/magicNumbers');

module.exports = async ({ name, unity, price }) => {
  const ingredientExistsOnDatabase = (await search(filterField({ name })))[0];

  if (ingredientExistsOnDatabase) {
    return null;
  }

  const { insertedId } = await create({
    name,
    unity,
    quantity: setDecimalPlaces(INITIAL_QUANTITY, DECIMAL_PLACES_QUANTITY),
    price: setDecimalPlaces(price, DECIMAL_PLACES_PRICE),
  });

  const newIngredient = (
    await search(filterField({ _id: ObjectId(insertedId) }))
  )[0];

  return newIngredient;
};
