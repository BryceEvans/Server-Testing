
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        { name: 'Shay' },
        { name: 'Mason' },
        { name: 'Oilivia' },
      ]);
    });
};
