const { INGREDIENTS } = require('../../../utils/strings');
const { searchByField, searchById, create } = require('../../../models')(INGREDIENTS);
const { setDecimalPlaces } = require('../../functions');
const {
  DECIMAL_PLACES_PRICE, INITIAL_QUANTITY,
} = require('../../../utils/magicNumbers');

module.exports = async ({ name, unity, price }) => {
  const ingredientExistsOnDatabase = await searchByField({ name });

  if (ingredientExistsOnDatabase) return null;

  const { insertedId } = await create({
    name,
    unity,
    quantity: INITIAL_QUANTITY,
    price: setDecimalPlaces(price, DECIMAL_PLACES_PRICE),
  });

  const newIngredient = await searchById(insertedId);

  return newIngredient;
};

/*

OBSERVAÇÃO: para adicionar a quantidade nos ingredientes, é necessário efetuar o
update do ingrediente com os valores desejados
O valores são somado ao estoque, ou seja, se existe 10 de estoque, caso efetue o update
de 'quantity: 100' o saldo passará para 110.

*/
