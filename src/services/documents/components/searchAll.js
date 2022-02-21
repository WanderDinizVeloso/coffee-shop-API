const { COMPONENTS } = require('../../../utils/strings');
const { searchAll } = require('../../../models')(COMPONENTS);

module.exports = async () => {
  const components = await searchAll();

  return components;
};
