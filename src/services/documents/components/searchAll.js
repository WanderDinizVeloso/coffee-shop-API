const { COMPONENTS } = require('../../../utils/strings');
const { search } = require('../../../models')(COMPONENTS);

module.exports = async () => {
  const components = await search();

  return components;
};
