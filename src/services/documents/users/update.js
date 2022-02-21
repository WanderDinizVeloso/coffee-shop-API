const { hash } = require('bcrypt');

const { BCRYPT_SALT_ROUNDS } = process.env;

const { USERS, EMAIL_EXIST } = require('../../../utils/strings');
const { update, searchById } = require('../../../models')(USERS);
const { stringInNumber, checkNewEmailOnDatabase, filterNull } = require('../../functions');

module.exports = async ({ id, fullName, email, password }) => {
  const user = await searchById(id);

  if (!user) {
    return null;
  }

  const newEmailExistsOnDatabase = await checkNewEmailOnDatabase(email, user.email);

  if (newEmailExistsOnDatabase) {
    return EMAIL_EXIST;
  }

  const hashedPassword = await hash(password, stringInNumber(BCRYPT_SALT_ROUNDS)) || user.password;

  await update({
    ...user,
    fullName: filterNull(fullName, user.fullName),
    email: filterNull(email, user.email),
    password: hashedPassword || user.password,
  });

  const { password: pass, ...newUserDataWithoutPassword } = await searchById(id);

  return { newUserData: newUserDataWithoutPassword };
};
