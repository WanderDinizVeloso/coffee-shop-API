const { ADMIN, MASTER_ROLE } = require('../../utils/strings');

module.exports = (userRole, masterRole) => {
  if (masterRole === MASTER_ROLE) return ADMIN;

  return userRole;
};

/*

Função que troca o 'role' do usuário
Somente usuário 'master' poderá efetuar a troca através do users update, passando o id no req.params (não precisa de body, somente o id o req.params)

*/
