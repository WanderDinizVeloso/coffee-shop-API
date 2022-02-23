const { hash } = require('bcrypt');

const { BCRYPT_SALT_ROUNDS } = process.env;

const { USERS, USER } = require('../../../utils/strings');
const { create, searchByField, searchById } = require('../../../models')(USERS);
const { stringInNumber } = require('../../functions');

module.exports = async ({ fullName, email, password }) => {
  const userExistsOnDatabase = await searchByField({ email });

  if (userExistsOnDatabase) return null;

  const hashedPassword = await hash(password, stringInNumber(BCRYPT_SALT_ROUNDS));

  const userWithHashedPasswordAndRole = { fullName, email, password: hashedPassword, role: USER };

  const { insertedId } = await create(userWithHashedPasswordAndRole);

  const { password: pass, ...newUserWithoutPassword } = await searchById(insertedId);

  return newUserWithoutPassword;
};

/*

no users create os usuário são criado somente com 'role = user'
para efetuar a troca para admin, é necessário efetuar o login como 'master' (com os dados
do .env) e logo apos efetuar o update de usuário passando somente o id no req.params

*/
