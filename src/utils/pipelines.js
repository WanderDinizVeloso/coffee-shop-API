const { ATTRIBUTE_DISABLED } = require('./magicNumbers');

const filterUserWithoutPassword = (field) => ([
  { $match: field },
  { $project: { password: ATTRIBUTE_DISABLED } },
]);

const filterField = (field) => ([
  { $match: field },
]);

module.exports = {
  filterUserWithoutPassword,
  filterField,
};
