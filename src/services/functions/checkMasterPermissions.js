const { MASTER_EMAIL, MASTER_PASSWORD } = process.env;
const { MASTER_ROLE } = require('../../utils/strings');

module.exports = async (email, password) => {
  if (email === MASTER_EMAIL && password === MASTER_PASSWORD) {
    return { email, role: MASTER_ROLE };
  }

  return null;
};
