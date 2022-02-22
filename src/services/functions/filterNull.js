module.exports = (parameter, parameterOnDatabase) => {
  if (!parameter || parameter === '') return parameterOnDatabase;
  
  return parameter;
};
