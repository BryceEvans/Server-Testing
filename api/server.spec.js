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
  it('sends correct response object', async () => {
    const response = await request(server).get('/');
    expect(response.body).toEqual({ api: "up" });
  })
  it('responds with json', async () => {
    const response = await request(server).get('/');
    expect(response.type).toMatch(/json/i);
  })
})

describe('/get friends', () => {
  it('responds with 200', async () => {
    const response = await request(server).get('/friends');
    expect(response.status).toBe(200)
  })
  it('responds with json', async () => {
    const response = await request(server).get('/friends');
    expect(response.type).toMatch(/json/i);
  })
  it('sends correct response object', async () => {
    const response = await request(server).get('/friends');
    expect(response.body).toEqual([]);
  })
})

describe('/post friends', () => {
  it('', async () => {
      
  })
  it('', async () => {
    
  })
  it('', async () => {
    
  })
})


