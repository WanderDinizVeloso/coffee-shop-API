const { USERS } = require('../../../utils/strings');
const { remove, searchById } = require('../../../models')(USERS);
const { ATTRIBUTE_DISABLED } = require('../../../utils/magicNumbers');

module.exports = async (id) => {
  const user = await searchById(id, { password: ATTRIBUTE_DISABLED });

  if (!user) {
    return null;
  }

  await remove(id);

  return user;
};
