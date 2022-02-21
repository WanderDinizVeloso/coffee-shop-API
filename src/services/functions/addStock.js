const stringInNumber = require('./stringInNumber');

module.exports = async (quantityData, newAddition) => {
  const convertedQuantityData = stringInNumber(quantityData);

  return convertedQuantityData + newAddition;
};
