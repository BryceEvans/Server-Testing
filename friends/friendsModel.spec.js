const friends = require('./friendsModel');
const db = require('../data/dbConfig');

describe('the friend model', () => {

  afterEach(async () => {
    await db('friends').truncate();
  })

  it('should insert new friends', async () => {
    const ids = await friends.insert({ name: 'Bryce' });

    expect(ids.length).toBe(1);
    expect(ids[0]).toBe(1);

  })
})

