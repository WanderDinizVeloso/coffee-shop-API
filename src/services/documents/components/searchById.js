const { ObjectId } = require('mongodb');

const { COMPONENTS } = require('../../../utils/strings');
const { search } = require('../../../models')(COMPONENTS);
const { filterField } = require('../../../utils/pipelines');

module.exports = async ({ id: _id }) => {
  const component = (await search(filterField({ _id: ObjectId(_id) })))[0];

  if (!component) {
    return null;
  }

  return component;
};
