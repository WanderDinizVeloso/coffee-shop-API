const { ObjectId } = require('mongodb');

const { INGREDIENTS, NAME_EXIST } = require('../../../utils/strings');
const { search, update } = require('../../../models')(INGREDIENTS);
const { setDecimalPlaces, checkNewNameOnDatabase } = require('../../functions');
const { filterField } = require('../../../utils/pipelines');
const {
  DECIMAL_PLACES_PRICE, DECIMAL_PLACES_QUANTITY, INITIAL_QUANTITY,
} = require('../../../utils/magicNumbers');

module.exports = async ({ id: _id, name, unity, price }) => {
  const ingredient = (await search(filterField({ _id: ObjectId(_id) })))[0];

  if (!ingredient) {
    return null;
  }

  const newNameExistsOnDatabase = await checkNewNameOnDatabase(name, ingredient.name, search);

  if (newNameExistsOnDatabase) {
    return NAME_EXIST;
  }
  
  await update({
    _id,
    name,
    unity,
    quantity: setDecimalPlaces(INITIAL_QUANTITY, DECIMAL_PLACES_QUANTITY),
    price: setDecimalPlaces(price, DECIMAL_PLACES_PRICE),
  });

  const newIngredientData = (await search(filterField({ _id: ObjectId(_id) })))[0];

  return { newData: newIngredientData };
};
