const { MongoClient } = require('mongodb');

const { URL, DB_NAME } = process.env;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connection = null;

module.exports = async () => {
  if (!connection) {
    connection = (await MongoClient.connect(
      URL,
      OPTIONS,
    )).db(DB_NAME);
  }

  return connection;
};
