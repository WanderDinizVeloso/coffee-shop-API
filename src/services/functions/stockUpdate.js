const { ObjectId } = require('mongodb');

const { COMPONENTS, INGREDIENTS } = require('../../utils/strings');
const { searchByField } = require('../../models')(COMPONENTS);
const { searchById, update } = require('../../models')(INGREDIENTS);

// pega os dados dos ingredientes do produto vendido 
const findIngredientsData = async (ingredients) => {
  const ingredientsData = ingredients.map(async ({ _id: ingredientId, quantity: amountUsed }) => {
    const ingredient = searchById(ingredientId);

    const { quantity: stock, name } = await Promise.resolve(ingredient);

    return { ingredientId, name, stock, amountUsed };
  });

  const resultResolve = await Promise.all(ingredientsData);

  return resultResolve;
};

// recebe os dados dos ingredientes + quantidade do produto vendido e verifica se existe
// sando suficiente.
// Caso NÃO exista saldo, retorna a lista dos ingredientes que não contem no estoque 
// A lista será utilizada para informar ao usuário a relação de ingredientes
// que necessitam de reposição. 
const stockVerify = (ingredientsData, quantityProductSold) => ingredientsData
  .reduce((accumulator, data) => {
    const { name, stock, amountUsed } = data;

    if (stock < (amountUsed * quantityProductSold)) {
      accumulator.list = [...accumulator.list, name];
      accumulator.insufficientFunds = true;

      return accumulator;
    }

    return accumulator;
}, { insufficientFunds: false, list: [] });

// se existir saldo suficiente em TODOS os ingredientes, executa o stockUpdate
// e efetua a atualização do estoque nos feridos ingredientes.
const stockUpdate = async (ingredientsData, quantityProductSold) => ingredientsData
  .forEach(async ({ ingredientId, amountUsed }) => {
    const ingredient = await searchById(ingredientId);

    const newQuantity = ingredient.quantity - (amountUsed * quantityProductSold);

    await update({ ...ingredient, quantity: newQuantity });
});

module.exports = async ({ productId: id, quantity }) => {  
  const { ingredients = [] } = await searchByField({ productId: ObjectId(id).toString() }) || {};

  const ingredientsData = await findIngredientsData(ingredients);

  const { insufficientFunds, list } = stockVerify(ingredientsData, quantity);

  if (insufficientFunds) return { insufficientFunds, list };

  await stockUpdate(ingredientsData, quantity);

  return { insufficientFunds };
};
