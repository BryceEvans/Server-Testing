const request = require('supertest');

const server = require('./server');
const db = require('../data/dbConfig');

afterEach(async () => {
  await db("friends").truncate();
})

describe('get / route handler', () => {
  it('responds with 200', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
  })
  // it('', () => {
    
  // })
  // it('', () => {
    
  // })
})

// it('', () => {
    
// })

