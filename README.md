# coffee-shop-API
<img src="https://img.shields.io/static/v1?label=Version&message=1.0.0&color=FF2102&style=for-the-badge&logo="/> <img src="https://img.shields.io/static/v1?label=License&message=MIT&color=119CE1&style=for-the-badge&logo="/> <img src="https://img.shields.io/static/v1?label=PR&message=YES&color=4DC31A&style=for-the-badge&logo="/>

Projeto criado para colocar em prática os conhecimentos adquiridos em Back-end, onde crio uma API REST para cadastro/leitura de usuários, ingredientes, produtos, componentes e vendas composta de:

 - :white_check_mark: Usuários:
    - [x] Criação;
    - [x] Remoção;
    - [x] Atualização;

  - :white_check_mark: Login:
    - [x] Login;

 - :white_check_mark: Ingredientes: 
    - [x] Criação;
    - [x] Remoção;
    - [x] Atualização;
    - [x] Busca por Id;
    - [x] Busca de todos os ingredients cadastrados.

 - :white_check_mark: Produtos: 
    - [x] Criação;
    - [x] Remoção;
    - [x] Atualização;
    - [x] Busca por Id;
    - [x] Busca de todos os produtos cadastrados.
    - [x] Upload de imagem do produto,

 - :white_check_mark: Componentes: 
    - [x] Criação;
    - [x] Remoção;
    - [x] Atualização;
    - [x] Busca por Id;
    - [x] Busca de todos os componentes cadastrados.

 - :white_check_mark: Vendas:
    - [x] Criação;
    - [x] Busca de todas as vendas realizadas.

 - :white_check_mark: Tokens invalidados no exclusão de um usuário:
    - [x] Criação;

---

# Sumário

- [Status](#status)
- [Licença](#licença)
- [Habilidades desenvolvidas](#habilidades-desenvolvidas)
- [Habilidades a desenvolver](#habilidades-a-desenvolver)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Organização e Estruturação do Projeto](#organização-e-estruturação-do-projeto)
- [Pré-requisitos](#pré-requisitos)
  - [Ferramentas necessárias](#ferramentas-necessárias)
  - [Rodando no servidor local](#rodando-no-servidor-local)
  - [Rodando no servidor heroku e Atlas](#rodando-no-servidor-heroku-e-Atlas)
  - [Quer contribuir com o projeto?](#quer-contribuir-com-o-projeto)
- [Contribuição](#contribuição)
- [Agradecimentos](#agradecimentos)
- [Autor](#autor)

---

# Status

Este projeto foi construído para um teste no empresa PRO FRANCHISING, mas pretendo continuar sua atualização, visando aprimoramento de suas funcionalidades além de melhorar sua performance e escalabilidade.

---

# Licença

Este projeto esta sobe a licença [MIT](https://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT).

---

# Habilidades desenvolvidas

- Entender os conceitos básicos de como o JavaScript funciona;
- Realizar operações assíncronas utilizando async/await;
- Realizar chamadas de funções de forma consciente;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares;
- Entender o funcionamento das camadas Model, Service, Controller;
- Estruturar uma aplicação em camadas;
- Delegar responsabilidades específicas para cada camada;
- Delegar responsabilidades específicas para cada parte do seu app;
- Melhorar manutenibilidade e reusabilidade do seu código;
- Entender e aplicar os padrões REST;
- Escrever assinaturas para APIs intuitivas e facilmente entendíveis;
- Autenticar rotas do Express, usando o token JWT;
- Gerar tokens a partir de informações como login e senha;
- Entender como utilizar o bcrypt para criptografar senhas de usuários;
- Entender e aplicar os conceitos de markdown na criação de um README estruturado;
- validar campos com o Joi;
- Realizar o Deploy da aplicação do heroku;
- Realizar o deploy do banco mongodb no atlas;
- Hospedar as imagens dos produtos no Amazon S3.

---

# Habilidades a desenvolver

Visando constante aprimoramento, destaco alguns objetivos que eu alinhei comigo mesmo para desempenhar a cada dia melhorar minhas habilidades como desenvolvedor Back-end: 

- Aprender mais sobre o validador Joi, ou outro semelhante, para melhor eficiência e agilidade no desenvolvimento das validações de meus projetos;
- Estudar e colocar em pratica, a cada dia mais, os testes dos softwares desenvolvidos, visando sempre pela qualidade da aplicação;

---

# Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/pt-br/)
- [nodemon](https://nodemon.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [eslint-config-trybe-backend](https://www.npmjs.com/package/eslint-config-trybe-backend)
- [http-status-codes](https://www.npmjs.com/package/http-status-codes)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mongodb](https://www.npmjs.com/package/mongodb)
- [heroku](https://www.heroku.com/)
- [Mongo Atlas](https://www.mongodb.com/)
- [Amazon S3](https://aws.amazon.com/pt/s3/)
- [Joi](https://npm.io/package/@hapi/joi)
- [joi-objectid](https://www.npmjs.com/package/joi-objectid)
- [Multer](https://www.npmjs.com/package/multer)

---

# Organização e Estruturação do Projeto

O projeto está organizado e estruturado da seguinte maneira:

```bash
├── src
├── .env
├── README.md
├── temp
│    └── images
└── src
      ├── api
      │   ├── app.js
      │   └── server.js
      ├── controllers
      │   ├── documents
      │   │   ├── components
      │   │   │   ├── create.js
      │   │   │   ├── index.js
      │   │   │   ├── remove.js
      │   │   │   ├── searchAll.js
      │   │   │   ├── searchById.js
      │   │   │   └── update.js
      │   │   ├── ingredients
      │   │   │   ├── create.js
      │   │   │   ├── index.js
      │   │   │   ├── remove.js
      │   │   │   ├── searchAll.js
      │   │   │   ├── searchById.js
      │   │   │   └── update.js
      │   │   ├── login
      │   │   │   ├── index.js
      │   │   │   └── login.js
      │   │   ├── products
      │   │   │   ├── create.js
      │   │   │   ├── index.js
      │   │   │   ├── remove.js
      │   │   │   ├── searchAll.js
      │   │   │   ├── searchById.js
      │   │   │   ├── update.js
      │   │   │   └── upload.js
      │   │   ├── sales
      │   │   │   ├── create.js
      │   │   │   ├── index.js
      │   │   │   └── searchAll.js
      │   │   └── users
      │   │       ├── create.js
      │   │       ├── index.js
      │   │       ├── remove.js
      │   │       └── update.js
      │   ├── middlewares
      │   │   ├── auth
      │   │   │   ├── admAuthorization.js
      │   │   │   ├── authentication.js
      │   │   │   └── userAuthorization.js
      │   │   ├── error
      │   │   │   └── index.js
      │   │   ├── index.js
      │   │   ├── upload
      │   │   │   └── index.js
      │   │   ├── validations
      │   │   │   ├── validateComponents.js
      │   │   │   ├── validateId.js
      │   │   │   ├── validateIngredients.js
      │   │   │   ├── validateLogin.js
      │   │   │   ├── validateProducts.js
      │   │   │   ├── validateSales.js
      │   │   │   └── validateUsers.js
      │   │   └── wrapper
      │   │       └── index.js
      │   ├── routers
      │   │   ├── components.js
      │   │   ├── ingredients.js
      │   │   ├── login.js
      │   │   ├── products.js
      │   │   ├── root.js
      │   │   ├── sales.js
      │   │   └── users.js
      │   └── statusAndMessage
      │       └── index.js
      ├── models
      │   ├── connection.js
      │   ├── documents
      │   │   ├── create.js
      │   │   ├── remove.js
      │   │   ├── searchAll.js
      │   │   ├── searchByField.js
      │   │   ├── searchById.js
      │   │   └── update.js
      │   └── index.js
      ├── services
      │   ├── auth
      │   │   ├── getToken.js
      │   │   ├── index.js
      │   │   └── verifyToken.js
      │   ├── documents
      │   │   ├── components
      │   │   │   ├── create.js
      │   │   │   ├── index.js
      │   │   │   ├── remove.js
      │   │   │   ├── searchAll.js
      │   │   │   ├── searchById.js
      │   │   │   └── update.js
      │   │   ├── ingredients
      │   │   │   ├── create.js
      │   │   │   ├── index.js
      │   │   │   ├── remove.js
      │   │   │   ├── searchAll.js
      │   │   │   ├── searchById.js
      │   │   │   └── update.js
      │   │   ├── login
      │   │   │   ├── index.js
      │   │   │   └── login.js
      │   │   ├── products
      │   │   │   ├── create.js
      │   │   │   ├── index.js
      │   │   │   ├── remove.js
      │   │   │   ├── searchAll.js
      │   │   │   ├── searchById.js
      │   │   │   ├── update.js
      │   │   │   └── upload.js
      │   │   ├── sales
      │   │   │   ├── create.js
      │   │   │   ├── index.js
      │   │   │   └── searchAll.js
      │   │   └── users
      │   │       ├── create.js
      │   │       ├── index.js
      │   │       ├── remove.js
      │   │       └── update.js
      │   └── functions
      │       ├── changePermissions.js
      │       ├── checkMasterPermissions.js
      │       ├── checkNewEmailOnDatabase.js
      │       ├── checkNewNameOnDatabase.js
      │       ├── filterNull.js
      │       ├── generateIngredientNameList.js
      │       ├── generateProductCost.js
      │       ├── index.js
      │       ├── renameImageName.js
      │       ├── setDecimalPlaces.js
      │       ├── stockUpdate.js
      │       └── stringInNumber.js
      └── utils
         ├── lists.js
         ├── magicNumbers.js
         ├── strings.js
         └── validationsSchema.js

```

# Pré-requisitos

## Ferramentas necessárias

Para rodar o projeto, você vai precisar instalar as seguintes ferramentas:
 - [Git](https://git-scm.com);
 - [Node.js](https://nodejs.org/en/);
 - Um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) ou outro de sua preferência;
 - Um cliente de API REST como [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) ou outro de sua preferência;

## Rodando no servidor local

 - Clone do Projeto e instale as dependências

    ```bash
    # Clone este repositório
    $ git clone 

    # Acesse a pasta do projeto no terminal/cmd
    $ cd coffee-shop-API

    # Instale as dependências
    $ npm install
    ```
 - Crie um arquivo chamado `.env` na raiz do projeto com as seguintes configurações:
    
    ### .env

    - PORT: Porta que rodará localmente o projeto (ex. 3000);
    - DB_NAME: nome desejado para seu banco local
    - URL: URL do banco MongoDB (ex. mongodb://localhost:27017)
    - SECRET: Segredo utilizado na autenticação.
    - EXPIRES_IN: tempo de duração dos tokens gerados. (ex. `1d`)
    - ALGORITHM: algoritmo de criptografia do token. (ex. `HS256`)
    - BCRYPT_SALT_ROUNDS: utilizado para proteção do password. (ex. 8)
    - MASTER_EMAIL: email que terá poderes para troca do 'role' do usuário
    - MASTER_PASSWORD: password que terá poderes para troca do 'role' do usuário


  >⚠️ ATENÇÃO ⚠️
  > - Para mais detalhes sobre SECRET, EXPIRES_IN e ALGORITHM vide: [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)


 - Inicie o sistema:

    ```bash
    # Inicie o sistema
    $ npm start
    ou
    $ npm run dev # para ambiente de desenvolvimento
    ```

 - Faça as requisições pelo [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) ou outro de sua preferência;

## Rodando no servidor heroku e Atlas

  Não quer rodar localmente? Você pode acessar o projeto hospedado no heroku!`:)`

  O deploy da API foi hospedada no heroku e o banco mongoDB hospedado no Atlas.

  - link: []()

  - Faça as requisições pelo [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) ou outro de sua preferência;

## Quer contribuir com o projeto?

  - Crie uma branch e faça sua contribuição:

    ```bash
    # Crie uma branch a partir da branch main
    $ git checkout -b nome-da-nova-branch

    # Adicione as mudanças desejadas com os devidos commits
    $ git add . # adiciona as mudanças ao stage do Git
    $ git commit -m 'informação do conteúdo do commit' # salvando as alterações de cada pequena alteração em um commit
    $ git push -u origin nome-da-nova-branch # adiciona a nova branch no repositório remoto do Projeto
    ```
  - Crie um novo `Pull Request` (PR):
     - Vá até a página de `Pull Requests` do repositório no GitHub
     - Clique no botão verde `"New pull request"`
     - Clique na caixa de seleção `"Compare"` e escolha a sua branch com atenção
     - Clique no botão verde `"Create pull request"`
     - Adicione uma descrição para o Pull Request
     - Clique no botão verde `"Create pull request"`
     - Me marque para revisar. `:)` [Wander](https://github.com/wanderdinizveloso)

// Fonte utilizada na criação do `Pré-requisitos`: [Trybe](https://www.betrybe.com)

---

# Contribuição

Bora entrar para esta lista? `;)` [AQUI](#pré-requisitos) 

---

# Agradecimentos

Agradeço:
 - À minha família por me apoiar nos estudos em minha transição de carreira;
 - À [Trybe](https://www.betrybe.com) por me dar a oportunidade de aprender uma nova carreira, com seu Curso de Desenvolvimento WEB Full-Stack, na modalidade [MSC](https://www.betrybe.com/msc-modelo-de-sucesso-compartilhado#investimento-como-functiona-mobile-section).
 - Toda a equipe Trybe, em especial:
    - [Jadezita](https://www.linkedin.com/in/jade--vieira/) e [Rê](https://www.linkedin.com/in/renata-nazar%C3%A9-magalh%C3%A3es/), pelo carinho e apoio em [softs skills](https://www.youtube.com/watch?v=yA3sc5mnctg&t=1s);
    - [Pedro](https://www.linkedin.com/in/phramos07/), [Nato](https://www.linkedin.com/in/renato-alvares/), [Ricci](https://www.linkedin.com/in/henriquericci/) e [Rafa Guimarães](https://www.linkedin.com/in/rafaelmguimaraes/), pelo belíssimo apoio e ensinamentos em back-end;
    - [Daniel](https://www.linkedin.com/in/marciodanielll/) e [Rafa Medeiros](https://www.linkedin.com/in/rafael-medeiros-gomes/), monitores Summer de Instrução, pelo apoio, principalmente na introdução de novos conteúdos.     

---

# Autor

 <img src="https://avatars.githubusercontent.com/u/82230642?v=4" width="100px;" alt="minha foto"/>
 <br />
  Wander Diniz Veloso
<br />
  Estudante de Desenvolvimento WEB e a cada dia mais apaixonado por tecnologia!

Entre em contato!

<section align="center"> 
  <a href="https://www.linkedin.com/in/wander-diniz-veloso" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
</section>

---
