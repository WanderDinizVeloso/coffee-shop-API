const { USERS } = require('../../utils/strings');
const { searchByField } = require('../../models')(USERS);

module.exports = async (newEmail, emailData) => {
  if (newEmail !== emailData) {
    const verifiedEmail = await searchByField({ email: newEmail });

    return verifiedEmail;
  }

  return null;
};
