const { PRODUCTS } = require('../../../utils/strings');
const { searchById, update } = require('../../../models')(PRODUCTS);
const { generateUrl } = require('../../functions');

module.exports = async ({ req }) => {
  const { id } = req.params;
  
  const product = await searchById(id);
  
  if (!product) return null;

  const url = generateUrl(req);
  
  await update({ ...product, image: url });

  const newProductData = await searchById(id);

  return { newData: newProductData };
};
