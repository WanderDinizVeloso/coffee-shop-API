const create = require('./documents/create');
const remove = require('./documents/remove');
const searchAll = require('./documents/searchAll');
const searchById = require('./documents/searchById');
const searchByField = require('./documents/searchByField');
const update = require('./documents/update');

module.exports = (collection) => ({
  create: async (doc) => create(collection, doc),
  remove: async (id) => remove(collection, id),
  searchAll: async (filterConfig, attributesConfig, sortConfig) => searchAll(
    collection, filterConfig, attributesConfig, sortConfig,
  ),
  searchByField: async (field, attributesConfig) => searchByField(
    collection, field, attributesConfig,
  ),
  searchById: async (id, attributesConfig) => searchById(collection, id, attributesConfig),
  update: async (doc) => update(collection, doc),
});
