const { ObjectId } = require('mongodb');

const { USERS, TOKENS, ADMIN } = require('../../../utils/strings');
const { remove, search } = require('../../../models')(USERS);
const { create } = require('../../../models')(TOKENS);
const { filterField } = require('../../../utils/pipelines');

module.exports = async ({ id: _id, role, token }) => {
  const user = (await search(filterField({ _id: ObjectId(_id) })))[0];

  if (!user) {
    return null;
  }

  await remove(_id);

  if (role !== ADMIN) {
    await create({ token });
  }

  return user;
};

// create({ token }) envia o token do usuário para blackList. vide services/auth/verifyToken.  
