const create = require('./documents/create');
const remove = require('./documents/remove');
const search = require('./documents/search');
const update = require('./documents/update');

module.exports = (collection) => ({
  create: async (doc) => create(collection, doc),
  remove: async (id) => remove(collection, id),
  search: async (pipeline) => search(collection, pipeline),
  update: async (doc) => update(collection, doc),
});
