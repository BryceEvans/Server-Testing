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

module.exports = server;