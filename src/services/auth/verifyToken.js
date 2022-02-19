const { verify } = require('jsonwebtoken');

const { SECRET } = process.env;

const { TOKENS } = require('../../utils/strings');
const { search } = require('../../models')(TOKENS);
const { filterField } = require('../../utils/pipelines');

module.exports = async (token) => {
  try {
    const decoded = verify(token, SECRET);

    const existsOnTheBlacklist = (await search(filterField({ token })))[0];
  
    if (existsOnTheBlacklist) {
      return null;
    }

    return decoded.data;
  } catch (err) {
    return null;
  }
};

// visando segurança, todos os tokens, de contas de usuários excluídas, serão da lançadas na collection tokens.
// Assim, ao efetuar a busca, encontrando token repassado na busca, mesmo sendo válido, será retornado como token inválido.  
