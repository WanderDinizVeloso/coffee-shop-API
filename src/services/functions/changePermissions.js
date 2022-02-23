const { ADMIN, MASTER_ROLE } = require('../../utils/strings');

module.exports = (userRole, masterRole) => {
  if (masterRole === MASTER_ROLE) return ADMIN;

  return userRole;
};
