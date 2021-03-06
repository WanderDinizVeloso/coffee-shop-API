const { INGREDIENTS, NAME_EXIST } = require('../../../utils/strings');
const { searchById, searchByField, update } = require('../../../models')(INGREDIENTS);
const { setDecimalPlaces, checkNewNameOnDatabase, filterNull } = require('../../functions');
const { DECIMAL_PLACES_PRICE, DECIMAL_PLACES_QUANTITY } = require('../../../utils/magicNumbers');

module.exports = async ({ id, name, unity, quantity, price }) => {
  const ingredient = await searchById(id);

  if (!ingredient) return null;

  const newNameExists = await checkNewNameOnDatabase(name, ingredient.name, searchByField);

  if (newNameExists) return NAME_EXIST;

  const addQuantityOnStock = ingredient.quantity + quantity;

  await update({
    ...ingredient,
    name: filterNull(name, ingredient.name),
    unity: filterNull(unity, ingredient.unity),
    quantity: setDecimalPlaces(addQuantityOnStock, DECIMAL_PLACES_QUANTITY) || ingredient.quantity,
    price: setDecimalPlaces(price, DECIMAL_PLACES_PRICE) || ingredient.price,
  });

  const newIngredientData = await searchById(id);

  return { newData: newIngredientData };
};

/*

OBSERVAÇÃO: para adicionar a quantidade nos ingredientes, é necessário efetuar o
update do ingrediente com os valores desejados
O valores são somado ao estoque, ou seja, se existe 10 de estoque, caso efetue o update
de 'quantity: 100' o saldo passará para 110.
Tal funcionalidade é disponível somente para o update de ingredientes

*/
