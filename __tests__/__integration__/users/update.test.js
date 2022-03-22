const { MongoClient } = require('mongodb');
const request = require('supertest');

const connectionMock = require('../../utils/connectionMock');
const app = require('../../../src/api/app');

describe('PUT /users tests', () => {
  beforeEach(async () => {
    const connection = await connectionMock()
    MongoClient.connect = jest.fn().mockResolvedValueOnce(connection);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should update user when passed the data correctly', async () => {
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
      .put(`/users/${create.body.createdUser['_id']}`)
      .set({ "authorization": `${login.body.token}`})

    expect(response.statusCode).toBe(200);

    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe("'user' modified successfully.");

    expect(response.body).toHaveProperty('updatedUser');

    expect(response.body.updatedUser).toHaveProperty('_id');

    expect(response.body.updatedUser).toHaveProperty('fullName');
    expect(response.body.updatedUser.fullName).toBe('FulName Test');
    
    expect(response.body.updatedUser).toHaveProperty('email');
    expect(response.body.updatedUser.email).toBe('test@test.com.br');
    
    expect(response.body.updatedUser).toHaveProperty('role');
    expect(response.body.updatedUser.role).toBe('user');

    expect(response.body.updatedUser).not.toHaveProperty('password');
  });
});
