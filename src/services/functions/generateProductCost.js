const { ObjectId } = require('mongodb');

const { COMPONENTS, INGREDIENTS } = require('../../utils/strings');
const { DECIMAL_PLACES_PRICE, INITIAL_VALUE } = require('../../utils/magicNumbers');
const { searchByField } = require('../../models')(COMPONENTS);
const { searchById } = require('../../models')(INGREDIENTS);

const stringInNumber = require('./stringInNumber');
const setDecimalPlaces = require('./setDecimalPlaces');

module.exports = async (product = {}) => {
  const { _id: id } = product;
  
  const { ingredients = [] } = await searchByField({ productId: ObjectId(id).toString() }) || {};
  
  const costList = ingredients.map(async ({ _id: ingredientId, quantity }) => {
    const ingredient = searchById(ingredientId);

    const { price } = await Promise.resolve(ingredient);

    const convertedQuantity = stringInNumber(quantity);
    const convertedPrice = stringInNumber(price);

    return (convertedQuantity * convertedPrice);
  });

  const costListResolve = await Promise.all(costList);

  const cost = costListResolve.reduce((accumulator, value) => accumulator + value, INITIAL_VALUE);

  const costTwoDecimalPlaces = setDecimalPlaces(cost, DECIMAL_PLACES_PRICE);

  return { ...product, cost: costTwoDecimalPlaces };
};
