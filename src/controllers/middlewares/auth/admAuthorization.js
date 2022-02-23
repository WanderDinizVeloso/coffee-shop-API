const { unauthorized } = require('../../statusAndMessage');
const { ADMIN } = require('../../../utils/strings');

module.exports = async (req, _res, next) => {
  const { role } = req.user;

  if (role !== ADMIN) return next(unauthorized());
  
  return next();
};

/*

middleware utilizado para limitar o acesso da toda ao usuários 'admin' 

*/
