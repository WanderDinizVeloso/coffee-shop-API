const { MongoClient } = require('mongodb');
const request = require('supertest');

const connectionMock = require('../../utils/connectionMock');
const app = require('../../../src/api/app');

describe('POST /login tests', () => {
  beforeEach(async () => {
    const connection = await connectionMock()
    MongoClient.connect = jest.fn().mockResolvedValueOnce(connection);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return token when logged in with the correct data of the duly registered user', async () => {
    const req = await request(app);

    await req
      .post('/users')
      .send({
        fullName: "FulName Test",
        email: "test@test.com.br",
        password: "T1234567890!"
      });

    const response = await req
      .post('/login')
      .send({
        email: "test@test.com.br",
        password: "T1234567890!"
      });

    expect(response.statusCode).toBe(200);

    expect(response.body).toHaveProperty('token');
  });
});
