const { ObjectId } = require('mongodb');

const { COMPONENTS } = require('../../utils/strings');
const { searchByField } = require('../../models')(COMPONENTS);

module.exports = async (product) => {
  const { _id: id } = product;
  
  const { ingredients } = await searchByField({ productId: ObjectId(id).toString() });
  
  const ingredientsName = ingredients.map(({ name }) => name);
  
  return { ...product, ingredients: ingredientsName };
};
