const { COMPONENTS } = require('../../../utils/strings');
const { searchById, remove } = require('../../../models')(COMPONENTS);

module.exports = async ({ id }) => {
  const component = await searchById(id);

  if (!component) return null;

  await remove(id);

  return component;
};
