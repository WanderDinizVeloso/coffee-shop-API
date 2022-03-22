const { MongoClient } = require('mongodb');
const request = require('supertest');

const connectionMock = require('../../utils/connectionMock');
const app = require('../../../src/api/app');

describe('POST /users tests', () => {
  beforeEach(async () => {
    const connection = await connectionMock()
    MongoClient.connect = jest.fn().mockResolvedValueOnce(connection);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should create user when passed the data correctly', async () => {
    const req = await request(app);
    const response = await req
      .post('/users')
      .send({
        fullName: "FulName Test",
        email: "test@test.com.br",
        password: "T1234567890!"
      });

    expect(response.statusCode).toBe(201);

    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe("'user' created successfully.");

    expect(response.body).toHaveProperty('createdUser');

    expect(response.body.createdUser).toHaveProperty('_id');

    expect(response.body.createdUser).toHaveProperty('fullName');
    expect(response.body.createdUser.fullName).toBe('FulName Test');
    
    expect(response.body.createdUser).toHaveProperty('email');
    expect(response.body.createdUser.email).toBe('test@test.com.br');
    
    expect(response.body.createdUser).toHaveProperty('role');
    expect(response.body.createdUser.role).toBe('user');

    expect(response.body.createdUser).not.toHaveProperty('password');
  });
});
