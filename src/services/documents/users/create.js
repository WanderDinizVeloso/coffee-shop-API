const { hash } = require('bcrypt');

const { BCRYPT_SALT_ROUNDS } = process.env;

const { USERS, USER } = require('../../../utils/strings');
const { create, search } = require('../../../models')(USERS);
const { stringInNumber } = require('../../functions');
const { ATTRIBUTE_DISABLED } = require('../../../utils/magicNumbers');

const userExistsOnDatabasePipeline = (email) => ([
  { $match: { email } },
]);

const newUserWithoutPasswordPipeline = (id) => ([
  { $match: { _id: id } },
  { $project: { password: ATTRIBUTE_DISABLED } },
]);

module.exports = async ({ fullName, email, password }) => {
  const userExistsOnDatabase = await search(userExistsOnDatabasePipeline(email));

  if (userExistsOnDatabase[0]) {
    return null;
  }

  const hashedPassword = await hash(password, stringInNumber(BCRYPT_SALT_ROUNDS));

  const userWithHashedPasswordAndRole = { fullName, email, password: hashedPassword, role: USER };

  const { insertedId } = await create(userWithHashedPasswordAndRole);

  const newUserWithoutPassword = await search(newUserWithoutPasswordPipeline(insertedId));

  return newUserWithoutPassword[0];
};
