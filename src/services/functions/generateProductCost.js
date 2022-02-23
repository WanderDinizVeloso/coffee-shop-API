const { ObjectId } = require('mongodb');

const { COMPONENTS, INGREDIENTS } = require('../../utils/strings');
const { DECIMAL_PLACES_PRICE, INITIAL_VALUE } = require('../../utils/magicNumbers');
const { searchByField } = require('../../models')(COMPONENTS);
const { searchById } = require('../../models')(INGREDIENTS);

const setDecimalPlaces = require('./setDecimalPlaces');

module.exports = async (product = {}) => {
  const { _id: id } = product;
  
  const { ingredients = [] } = await searchByField({ productId: ObjectId(id).toString() }) || {};
  
  const costList = ingredients.map(async ({ _id: ingredientId, quantity }) => {
    const ingredient = searchById(ingredientId);

    const { price } = await Promise.resolve(ingredient);

    return (quantity * price);
  });

  const costListResolve = await Promise.all(costList);

  const cost = costListResolve.reduce((accumulator, value) => accumulator + value, INITIAL_VALUE);

  const costTwoDecimalPlaces = setDecimalPlaces(cost, DECIMAL_PLACES_PRICE);

  return { ...product, cost: costTwoDecimalPlaces };
};

/*

Efetua a busca dos dados necessário para gerar o custo total do produto

OBSERVAÇÃO: Ao efetuar a busca de um produto ou todos os produtos, existe a possibilidade
de ser gerados dois tipos de resultado:
 - 01: envio de 'cost=activate' gera o produto/produtos com o valor total de seu custo
 - 02: sem envio de 'cost=activate' gera o produto/produtos com a lista de seus ingredientes
 (case exista ingredientes cadastrados no components).

 */
