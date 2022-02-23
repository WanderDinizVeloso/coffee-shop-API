const { IMAGE_FORMAT_POSITION } = require('../../utils/magicNumbers');
const { IMAGE_STRING_SEPARATOR } = require('../../utils/strings');

module.exports = (id, file) => {
  const { originalname: originalName } = file;
  const imageFormat = (originalName.split(IMAGE_STRING_SEPARATOR))[IMAGE_FORMAT_POSITION];

  const newImageName = `${id}.${imageFormat}`;

  return newImageName;
};

/*

Função utilizada para renomear o nome da imagem, efetuando a troca para o id do produto
cadastradoEfetua a busca dos dados necessário para gerar o custo total do produto

 */
