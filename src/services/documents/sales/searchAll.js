const { SALES } = require('../../../utils/strings');
const { searchAll } = require('../../../models')(SALES);

module.exports = async () => {
  const sales = await searchAll();
  
  return sales;
};
