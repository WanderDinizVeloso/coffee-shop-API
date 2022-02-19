const { USERS } = require('../../utils/strings');
const { search } = require('../../models')(USERS);
const { filterField } = require('../../utils/pipelines');

module.exports = async (newEmail, emailData) => {
  if (newEmail !== emailData) {
    const verifiedEmail = (await search(filterField({ email: newEmail })))[0];

    return verifiedEmail;
  }

  return null;
};
