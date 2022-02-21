const { PRODUCTS } = require('../../../utils/strings');
const { searchAll } = require('../../../models')(PRODUCTS);
const { generateIngredientNameList, generateProductCost } = require('../../functions');

module.exports = async (cost = false) => {
  const products = await searchAll();

  if (cost) {
    const productsWithCost = products.map((product) => generateProductCost(product));
    const productsWithCostResolve = await Promise.all(productsWithCost);
  
    return productsWithCostResolve;
  }

  const productsWithIngredientList = products.map((product) => generateIngredientNameList(product));
  const productsWithIngredientListResolve = await Promise.all(productsWithIngredientList);

  return productsWithIngredientListResolve;
};
