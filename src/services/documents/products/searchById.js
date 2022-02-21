const { PRODUCTS } = require('../../../utils/strings');
const { searchById } = require('../../../models')(PRODUCTS);
const { generateIngredientNameList } = require('../../functions');

module.exports = async ({ id }) => {
  const product = await searchById(id);

  if (!product) {
    return null;
  }

  const productWithIngredientList = await generateIngredientNameList(product);

  return productWithIngredientList;
};
