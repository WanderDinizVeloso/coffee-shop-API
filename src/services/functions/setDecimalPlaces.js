module.exports = (number, decimalPlaces) => {
  if (!number || number === '') return null;

  return parseFloat((number).toFixed(decimalPlaces));
};

/*

Função que efetua a troca de elementos tipo string para tipo numero

 */
