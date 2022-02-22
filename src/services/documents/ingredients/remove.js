const { INGREDIENTS } = require('../../../utils/strings');
const { searchById, remove } = require('../../../models')(INGREDIENTS);

module.exports = async ({ id }) => {
  const ingredient = await searchById(id);

  if (!ingredient) return null;

  await remove(id);

  return ingredient;
};
