const { PRODUCTS, ACTIVATE } = require('../../../utils/strings');
const { searchAll } = require('../../../models')(PRODUCTS);
const { generateIngredientNameList, generateProductCost } = require('../../functions');

module.exports = async ({ cost }) => {
  const products = await searchAll();

  if (cost === ACTIVATE) {
    const productsWithCost = products.map((product) => generateProductCost(product));
    const productsWithCostResolve = await Promise.all(productsWithCost);
  
    return productsWithCostResolve;
  }

  const productsWithIngredientList = products.map((product) => generateIngredientNameList(product));
  const productsWithIngredientListResolve = await Promise.all(productsWithIngredientList);

  return productsWithIngredientListResolve;
};

/*

OBSERVAÇÃO: Ao efetuar a busca de um produto ou todos os produtos, existe a possibilidade
de ser gerados dois tipos de resultado:
 - 01: envio de 'cost=activate' gera o produto/produtos com o valor total de seu custo
 - 02: sem envio de 'cost=activate' gera o produto/produtos com a lista de seus ingredientes
 (case exista ingredientes cadastrados no components).

*/
