const { PRODUCTS } = require('../../../utils/strings');
const { searchAll } = require('../../../models')(PRODUCTS);
const { generateIngredientNameList } = require('../../functions');

module.exports = async () => {
  const products = await searchAll();

  const productsWithIngredientList = products.map((product) => generateIngredientNameList(product));

  const productsWithIngredientListResolve = await Promise.all(productsWithIngredientList);

  return productsWithIngredientListResolve;
};
