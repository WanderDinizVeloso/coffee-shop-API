const { hash } = require('bcrypt');
const { ObjectId } = require('mongodb');

const { BCRYPT_SALT_ROUNDS } = process.env;

const { USERS, EMAIL_EXIST } = require('../../../utils/strings');
const { update, search } = require('../../../models')(USERS);
const { stringInNumber, checkNewEmailOnDatabase } = require('../../functions');
const { filterField, filterUserWithoutPassword } = require('../../../utils/pipelines');

module.exports = async ({ id: _id, fullName, email, password }) => {
  const user = (await search(filterField({ _id: ObjectId(_id) })))[0];

  if (!user) {
    return null;
  }

  const newEmailExistsOnDatabase = await checkNewEmailOnDatabase(email, user.email);

  if (newEmailExistsOnDatabase) {
    return EMAIL_EXIST;
  }

  const hashedPassword = await hash(password, stringInNumber(BCRYPT_SALT_ROUNDS));

  await update({ _id, fullName, email, password: hashedPassword });

  const newUserDataWithoutPassword = (
    await search(filterUserWithoutPassword({ _id: ObjectId(_id) }))
  )[0];

  return { newUserData: newUserDataWithoutPassword };
};
