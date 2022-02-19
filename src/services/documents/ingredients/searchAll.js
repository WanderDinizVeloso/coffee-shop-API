const { INGREDIENTS } = require('../../../utils/strings');
const { search } = require('../../../models')(INGREDIENTS);

module.exports = async () => {
  const ingredients = await search();

  return ingredients;
};
