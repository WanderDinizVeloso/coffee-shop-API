const { INGREDIENTS } = require('../../../utils/strings');
const { searchAll } = require('../../../models')(INGREDIENTS);

module.exports = async () => {
  const ingredients = await searchAll();

  return ingredients;
};
