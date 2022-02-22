const { PRODUCTS } = require('../../../utils/strings');
const { searchById, remove } = require('../../../models')(PRODUCTS);

module.exports = async ({ id }) => {
  const product = await searchById(id);

  if (!product) return null;

  await remove(id);

  return product;
};
