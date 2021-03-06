const { SALES, PRODUCTS } = require('../../../utils/strings');
const { searchById, create } = require('../../../models')(SALES);
const { searchById: searchProduct } = require('../../../models')(PRODUCTS);
const { stockUpdate } = require('../../functions');

module.exports = async ({ productId, quantity }) => {
  const product = await searchProduct({ id: productId });

  if (!product) return null;

  const { insufficientFunds, list } = await stockUpdate({ productId, quantity });

  if (insufficientFunds) {
    return { insufficientFunds, list };
  }

  const { insertedId } = await create({ productId, quantity });

  const sales = await searchById(insertedId);

  return sales;
};

/*

Na criação da venda será:
 - verificado se existe ingredientes suficientes para a venda do produto
 - caso exista saldo, ao efetuar a compra, é efetuada a dedução no estoque
 dos ingredientes.

*/
