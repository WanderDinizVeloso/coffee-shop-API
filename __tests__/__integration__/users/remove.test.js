const { MongoClient } = require('mongodb');
const request = require('supertest');

const connectionMock = require('../../utils/connectionMock');
const app = require('../../../src/api/app');

describe('DEL /users tests', () => {
  beforeEach(async () => {
    const connection = await connectionMock()
    MongoClient.connect = jest.fn().mockResolvedValueOnce(connection);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should remove user when passed the data correctly', async () => {
    const req = await request(app);

    const create = await req
      .post('/users')
      .send({
        fullName: "FulName Test",
        email: "test@test.com.br",
        password: "T1234567890!"
      });

    const login = await req
      .post('/login')
      .send({
        email: "test@test.com.br",
        password: "T1234567890!"
      });

    const response = await req
      .delete(`/users/${create.body.createdUser['_id']}`)
      .set({ "authorization": `${login.body.token}`})

    expect(response.statusCode).toBe(200);

    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe("'user' deleted successfully,");
  });
});
