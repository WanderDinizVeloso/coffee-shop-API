const { SALES, USERS } = require('../../../utils/strings');
const { searchById, create } = require('../../../models')(SALES);
const { searchById: searchProduct } = require('../../../models')(USERS);

module.exports = async ({ productId, quantity }) => {
  const productExistsOnDatabase = await searchProduct({ id: productId });

  if (!productExistsOnDatabase) {
    return null;
  }

  const { insertedId } = await create({ productId, quantity });

  const sales = await searchById(insertedId);

  return sales;
};
