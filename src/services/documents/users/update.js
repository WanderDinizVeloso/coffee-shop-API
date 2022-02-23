const { hash } = require('bcrypt');

const { BCRYPT_SALT_ROUNDS } = process.env;

const { USERS, EMAIL_EXIST } = require('../../../utils/strings');
const { update, searchById } = require('../../../models')(USERS);
const {
  stringInNumber, checkNewEmailOnDatabase, filterNull, changePermissions,
} = require('../../functions');

module.exports = async ({ id, fullName, email, password, masterRole }) => {  
  const user = await searchById(id);
 
  if (!user) return null;

  const newEmailExistsOnDatabase = await checkNewEmailOnDatabase(email, user.email);
  
  if (newEmailExistsOnDatabase) return EMAIL_EXIST;

  let passwordData = user.password;

  if (password) { 
    const hashedPassword = await hash(password, stringInNumber(BCRYPT_SALT_ROUNDS));

    passwordData = hashedPassword;
  }

  await update({
      ...user,
      fullName: filterNull(fullName, user.fullName),
      email: filterNull(email, user.email),
      password: filterNull(passwordData, user.password),
      role: changePermissions(user.role, masterRole),
  });

  const { password: pass, ...newUserDataWithoutPassword } = await searchById(id);

  return { newUserData: newUserDataWithoutPassword };
};

/*

com a autorização 'master' é possível efetuar a troca do role do usuário de 'user' para
'master'

*/
