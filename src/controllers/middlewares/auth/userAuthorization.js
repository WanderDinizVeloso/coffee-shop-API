const { unauthorized } = require('../../statusAndMessage');
const { ADMIN } = require('../../../utils/strings');

module.exports = async (req, _res, next) => {
  const { id } = req.params;
  const { _id: reqUserId, role } = req.user;

  if (id !== reqUserId && role !== ADMIN) {
    return next(unauthorized());
  }

  return next();
};

// Middleware utilizado para verificar se o responsável pela requisição é o próprio usuário ou o administrador, onde envolva principalmente remoção ou alteração de dados do referido usuário.
