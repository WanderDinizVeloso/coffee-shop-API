module.exports = async (newName, nameData, searchByField) => {
  if (newName !== nameData) {
    const verifiedName = searchByField({ name: newName });

    return verifiedName;
  }

  return null;
};

/*

Visando deixar o nome do produto ou ingrediente único no banco de dados, ao efetuar um 
update, caso o name seja trocado, é feita uma verificação para constatar 
se o novo nome existe no banco de dados.

*/
