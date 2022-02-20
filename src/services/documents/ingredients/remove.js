const { ObjectId } = require('mongodb');

const { INGREDIENTS } = require('../../../utils/strings');
const { search, remove } = require('../../../models')(INGREDIENTS);
const { filterField } = require('../../../utils/pipelines');

module.exports = async ({ id: _id }) => {
  const ingredient = (await search(filterField({ _id: ObjectId(_id) })))[0];

  if (!ingredient) {
    return null;
  }

  await remove(_id);

  return ingredient;
};
