const { PRODUCTS, ACTIVATE } = require('../../../utils/strings');
const { searchById } = require('../../../models')(PRODUCTS);
const { generateProductCost, generateIngredientNameList } = require('../../functions');

module.exports = async ({ id, cost = false }) => {
  const product = await searchById(id);

  if (!product) return null;

  if (cost === ACTIVATE) {
    const productWithCost = await generateProductCost(product);
    return productWithCost;
  }

  const productWithIngredientList = await generateIngredientNameList(product);
  return productWithIngredientList;
};
