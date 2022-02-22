const { ADMIN } = require('../../utils/strings');

module.exports = (userRole, masterRole) => {
  if (masterRole) {
    return { role: ADMIN };
  }
  
  return userRole;
};
