const { compare } = require('bcrypt');

const { USERS } = require('../../../utils/strings');
const { search } = require('../../../models')(USERS);
const { getToken } = require('../../auth');
const { filterField } = require('../../../utils/pipelines');

module.exports = async ({ email, password }) => {
  const user = (await search(filterField({ email })))[0];

  if (!user) {
    return null;
  }
  
  const correctPassword = await compare(password, user.password);
 
  if (!correctPassword) {
    return null;
  }

  const { password: pass, ...userWithoutPassword } = user;

  const token = getToken(userWithoutPassword);

  return token;
};
