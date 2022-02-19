const { filterField } = require('../../utils/pipelines');

module.exports = async (newName, nameData, search) => {
  if (newName !== nameData) {
    const verifiedName = (await search(filterField({ name: newName })))[0];

    return verifiedName;
  }

  return null;
};
