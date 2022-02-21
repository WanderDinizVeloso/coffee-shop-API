const { PRODUCTS } = require('../../../utils/strings');
const { searchById } = require('../../../models')(PRODUCTS);

module.exports = async ({ id }) => {
  const product = await searchById(id);

  if (!product) {
    return null;
  }

  return product;
};
