const { ObjectId } = require('mongodb');

const { COMPONENTS } = require('../../../utils/strings');
const { search, create } = require('../../../models')(COMPONENTS);
const { setDecimalPlaces } = require('../../functions');
const { filterField } = require('../../../utils/pipelines');
const { DECIMAL_PLACES_QUANTITY } = require('../../../utils/magicNumbers');

module.exports = async ({ productId, ingredients }) => {
  const componentExistsOnDatabase = (await search(filterField({ productId })))[0];

  if (componentExistsOnDatabase) {
    return null;
  }

  const newIngredientsData = ingredients.map(({ _id, quantity }) => ({
    _id,
    quantity: setDecimalPlaces(quantity, DECIMAL_PLACES_QUANTITY),
  }));

  const { insertedId } = await create({
    productId,
    ingredients: newIngredientsData,
  });

  const newComponent = (
    await search(filterField({ _id: ObjectId(insertedId) }))
  )[0];

  return newComponent;
};
