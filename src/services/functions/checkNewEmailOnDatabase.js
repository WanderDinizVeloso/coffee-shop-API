const { USERS } = require('../../utils/strings');
const { searchByField } = require('../../models')(USERS);

module.exports = async (newEmail, emailData) => {
  if (newEmail !== emailData) {
    const verifiedEmail = await searchByField({ email: newEmail });

    return verifiedEmail;
  }

  return null;
};

/*

visando deixar o email único no banco de dados, ao efetuar um update de um conta,
caso o email seja trocado, é feita uma verificação para constatar se o novo email
existe no banco de dados.

*/
