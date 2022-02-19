const { hash } = require('bcrypt');

const { BCRYPT_SALT_ROUNDS } = process.env;

const { USERS } = require('../../../utils/strings');
const { update, searchById } = require('../../../models')(USERS);
const { stringInNumber } = require('../../functions');
const { ATTRIBUTE_DISABLED } = require('../../../utils/magicNumbers');

module.exports = async ({ id: _id, fullName, email, password }) => {
  const userExistsOnDatabase = await searchById(_id, { password: ATTRIBUTE_DISABLED });

  if (!userExistsOnDatabase) {
    return null;
  }

  const hashedPassword = await hash(password, stringInNumber(BCRYPT_SALT_ROUNDS));

  await update({ _id, fullName, email, password: hashedPassword });

  const newUserDataWithoutPassword = await searchById(_id, { password: ATTRIBUTE_DISABLED });

  return { newUserData: newUserDataWithoutPassword };
};
