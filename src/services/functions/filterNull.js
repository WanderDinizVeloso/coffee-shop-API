module.exports = (parameter, parameterOnDatabase) => {
  if (!parameter || parameter === '') return parameterOnDatabase;
  
  return parameter;
};

/*

Visando não necessitar efetuar a entrada de todos os elementos em um update, a função
verifica se o elemento chegou nulo. Caso positivo, é efetuada a troca do elemento
nulo pelo que ja existe no bando de dados

*/
