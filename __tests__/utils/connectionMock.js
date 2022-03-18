const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connection = null;

module.exports = async () => {
  if (!connection) {
    const DBServer = await MongoMemoryServer.create();
    const URLMock = await DBServer.getUri();

    connection = (await MongoClient.connect(
      URLMock,
      OPTIONS,
    ));
  }

  return connection;
};
