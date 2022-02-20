const { PRODUCTS } = require('../../../utils/strings');
const { search } = require('../../../models')(PRODUCTS);

module.exports = async () => {
  const products = await search();

  return products;
};
