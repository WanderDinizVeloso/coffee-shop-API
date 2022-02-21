const { PRODUCTS } = require('../../../utils/strings');
const { searchAll } = require('../../../models')(PRODUCTS);

module.exports = async () => {
  const products = await searchAll();

  return products;
};
