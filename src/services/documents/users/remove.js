const { USERS, TOKENS, ADMIN } = require('../../../utils/strings');
const { remove, searchById } = require('../../../models')(USERS);
const { create } = require('../../../models')(TOKENS);

module.exports = async ({ id, role, token }) => {
  const user = await searchById(id);

  if (!user) {
    return null;
  }

  await remove(id);

  if (role !== ADMIN) {
    await create({ token });
  }

  return user;
};

// create({ token }) envia o token do usuário para blackList. vide services/auth/verifyToken.  
