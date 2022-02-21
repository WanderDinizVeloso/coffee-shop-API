const { INGREDIENTS } = require('../../../utils/strings');
const { searchById } = require('../../../models')(INGREDIENTS);

module.exports = async ({ id }) => {
  const ingredient = await searchById(id);

  if (!ingredient) {
    return null;
  }

  return ingredient;
};
