
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends_for_t').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('friends_for_t').insert([
        { name: 'Shay' },
        { name: 'Mason' },
        { name: 'Oilivia' },
      ]);
    });
};
