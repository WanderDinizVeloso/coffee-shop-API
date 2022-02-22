const { ADMIN, MASTER_ROLE } = require('../../utils/strings');

module.exports = (userRole, masterRole) => {
  console.log(masterRole === MASTER_ROLE);

  if (masterRole === MASTER_ROLE) return ADMIN;

  return userRole;
};
