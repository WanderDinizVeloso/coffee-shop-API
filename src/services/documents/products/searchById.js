const { PRODUCTS, ACTIVATE } = require('../../../utils/strings');
const { searchById } = require('../../../models')(PRODUCTS);
const { generateProductCost, generateIngredientNameList } = require('../../functions');

module.exports = async ({ id, cost = false }) => {
  const product = await searchById(id);

  if (!product) return null;

  if (cost === ACTIVATE) {
    const productWithCost = await generateProductCost(product);
    return productWithCost;
  }

  const productWithIngredientList = await generateIngredientNameList(product);
  return productWithIngredientList;
};

/*

OBSERVAÇÃO: Ao efetuar a busca de um produto ou todos os produtos, existe a possibilidade
de ser gerados dois tipos de resultado:
 - 01: envio de 'cost=activate' gera o produto/produtos com o valor total de seu custo
 - 02: sem envio de 'cost=activate' gera o produto/produtos com a lista de seus ingredientes
 (case exista ingredientes cadastrados no components).

*/
