const { ObjectId } = require('mongodb');

const { COMPONENTS } = require('../../utils/strings');
const { searchByField } = require('../../models')(COMPONENTS);

module.exports = async (product = {}) => {
  const { _id: id } = product;
  
  const { ingredients = [] } = await searchByField({ productId: ObjectId(id).toString() }) || {};
  
  const ingredientsName = ingredients.map(({ name }) => name);
  
  return { ...product, ingredients: ingredientsName };
};

/*

função utilizada para buscar nos components os nomes dos ingredientes que serão repassados 
para os products, visando gerar a lista de ingredientes ao efetuar uma busca de um produto
por id ou uma busca por todos os produtos 

OBSERVAÇÃO: Ao efetuar a busca de um produto ou todos os produtos, existe a possibilidade
de ser gerados dois tipos de resultado:
 - 01: envio de 'cost=activate' gera o produto/produtos com o valor total de seu custo
 - 02: sem envio de 'cost=activate' gera o produto/produtos com a lista de seus ingredientes
 (case exista ingredientes cadastrados no components).

 */
