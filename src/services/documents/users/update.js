const { hash } = require('bcrypt');

const { BCRYPT_SALT_ROUNDS } = process.env;

const { USERS } = require('../../../utils/strings');
const { update, search } = require('../../../models')(USERS);
const { stringInNumber } = require('../../functions');
const { filterField, filterUserWithoutPassword } = require('../../../utils/pipelines');

module.exports = async ({ id: _id, fullName, email, password }) => {
  const userExistsOnDatabase = (await search(filterField({ email })))[0];

  if (!userExistsOnDatabase) {
    return null;
  }

  const hashedPassword = await hash(password, stringInNumber(BCRYPT_SALT_ROUNDS));

  await update({ _id, fullName, email, password: hashedPassword });

  const newUserDataWithoutPassword = (await search(filterUserWithoutPassword({ _id })))[0];

  return { newUserData: newUserDataWithoutPassword };
};
