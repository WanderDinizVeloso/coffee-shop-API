const { PRODUCTS } = require('../../../utils/strings');
const { searchById, update } = require('../../../models')(PRODUCTS);

module.exports = async ({ id, url }) => {
  const product = await searchById(id);

  if (!product) {
    return null;
  }
  
  await update({ ...product, image: url });

  const newProductData = await searchById(id);

  return { newData: newProductData };
};
