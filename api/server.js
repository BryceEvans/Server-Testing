const express = require('express');

const friends = require('../friends/friendsModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/friends', async (req, res) => {
  const rows = await friends.getAll();
  res.status(200).json(rows);
})

server.post('/friends', async (req, res) => {
  const friendData = req.body;

  if (friendData.name) {
    const ids = await friends.insert(friendData);
    res.status(201).json(ids);
  } else {
    res.status(400).json({ error: "missing name in body" });
  }
})

module.exports = server;