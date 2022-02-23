const { MASTER_EMAIL, MASTER_PASSWORD } = process.env;
const { MASTER_ROLE } = require('../../utils/strings');

module.exports = (email, password) => {
  if (email === MASTER_EMAIL && password === MASTER_PASSWORD) {
    return { email, role: MASTER_ROLE };
  }

  return null;
};

/*

Função que verifica verifica se o password e senha são os mesmo incluído o .env do projeto.
Caso seja, repassa os dados de email e role para criação do token;

*/
