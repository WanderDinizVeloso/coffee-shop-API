const { COMPONENTS } = require('../../../utils/strings');
const { searchById } = require('../../../models')(COMPONENTS);

module.exports = async ({ id }) => {
  const component = await searchById(id);

  if (!component) {
    return null;
  }

  return component;
};
