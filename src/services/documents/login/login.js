const { compare } = require('bcrypt');

const { USERS } = require('../../../utils/strings');
const { searchByField } = require('../../../models')(USERS);
const { getToken } = require('../../auth');

module.exports = async ({ email, password }) => {
  const user = await searchByField({ email });

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
