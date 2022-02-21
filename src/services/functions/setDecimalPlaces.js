module.exports = (number, decimalPlaces) => {
  if (!number || number === '') {
    return null;
  }

  return parseFloat((number).toFixed(decimalPlaces));
};
