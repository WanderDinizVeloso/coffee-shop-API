module.exports = async (newName, nameData, searchByField) => {
  if (newName !== nameData) {
    const verifiedName = searchByField({ name: newName });

    return verifiedName;
  }

  return null;
};
