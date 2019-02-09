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

  afterEach(async () => {
    await db('friends').truncate();
  })

  it('responds with 201 wien body is correct', async () => {
    const body = { name: "Bryce" };
    const response = await request(server).post('/friends').send(body);
    expect(response.status).toBe(201);
  })
  it('responds with 400 when body is missing data', async () => {
    const body = {};
    const response = await request(server).post('/friends').send(body);
    expect(response.body).toBe(400);
  })
  it('responds with an array containng a new id', async () => {
    const body = { name: "Bryce" };
    const response = await request(server).post('/friends').send(body);
    expect(response.body.length).toBe(1);
  })
})


