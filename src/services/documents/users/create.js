const { hash } = require('bcrypt');

const { BCRYPT_SALT_ROUNDS } = process.env;

const { USERS } = require('../../../utils/strings');
const { create, searchByField, searchById } = require('../../../models')(USERS);
const { stringInNumber } = require('../../functions');
const { ATTRIBUTE_DISABLED } = require('../../../utils/magicNumbers');

module.exports = async ({ fullName, email, password }) => {
  const userExistsOnDatabase = await searchByField({ email });

  if (userExistsOnDatabase) {
    return null;
  }

  const hashedPassword = await hash(password, stringInNumber(BCRYPT_SALT_ROUNDS));

  const userWithHashedPassword = { fullName, email, password: hashedPassword };

  const { insertedId } = await create(userWithHashedPassword);

  const newUserWithoutPassword = await searchById(insertedId, { password: ATTRIBUTE_DISABLED });

  return newUserWithoutPassword;
};
