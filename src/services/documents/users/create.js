const { hash } = require('bcrypt');

const { BCRYPT_SALT_ROUNDS } = process.env;

const { USERS, USER } = require('../../../utils/strings');
const { create, search } = require('../../../models')(USERS);
const { stringInNumber } = require('../../functions');
const { filterField, filterUserWithoutPassword } = require('../../../utils/pipelines');

module.exports = async ({ fullName, email, password }) => {
  const userExistsOnDatabase = await search(filterField({ email }));

  if (userExistsOnDatabase[0]) {
    return null;
  }

  const hashedPassword = await hash(password, stringInNumber(BCRYPT_SALT_ROUNDS));

  const userWithHashedPasswordAndRole = { fullName, email, password: hashedPassword, role: USER };

  const { insertedId } = await create(userWithHashedPasswordAndRole);

  const newUserWithoutPassword = await search(filterUserWithoutPassword({ _id: insertedId }));

  return newUserWithoutPassword[0];
};
