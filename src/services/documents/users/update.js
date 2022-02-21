const { hash } = require('bcrypt');

const { BCRYPT_SALT_ROUNDS } = process.env;

const { USERS, EMAIL_EXIST } = require('../../../utils/strings');
const { update, searchById } = require('../../../models')(USERS);
const { stringInNumber, checkNewEmailOnDatabase } = require('../../functions');

module.exports = async ({ id, fullName, email, password }) => {
  const user = await searchById(id);

  if (!user) {
    return null;
  }

  const newEmailExistsOnDatabase = await checkNewEmailOnDatabase(email, user.email);

  if (newEmailExistsOnDatabase) {
    return EMAIL_EXIST;
  }

  const hashedPassword = await hash(password, stringInNumber(BCRYPT_SALT_ROUNDS));

  await update({ ...user, fullName, email, password: hashedPassword });

  const { password: pass, ...newUserDataWithoutPassword } = await searchById(id);

  return { newUserData: newUserDataWithoutPassword };
};
