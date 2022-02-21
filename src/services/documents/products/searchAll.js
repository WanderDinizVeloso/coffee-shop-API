const { PRODUCTS, ACTIVATE } = require('../../../utils/strings');
const { searchAll } = require('../../../models')(PRODUCTS);
const { generateIngredientNameList, generateProductCost } = require('../../functions');

module.exports = async ({ cost }) => {
  const products = await searchAll();

  if (cost === ACTIVATE) {
    const productsWithCost = products.map((product) => generateProductCost(product));
    const productsWithCostResolve = await Promise.all(productsWithCost);
  
    return productsWithCostResolve;
  }

  const productsWithIngredientList = products.map((product) => generateIngredientNameList(product));
  const productsWithIngredientListResolve = await Promise.all(productsWithIngredientList);

  return productsWithIngredientListResolve;
};
