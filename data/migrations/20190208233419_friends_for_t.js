
exports.up = function(knex, Promise) {
  return knex.schema.createTable('freinds_for_t', tbl => {
    tbl.increments();
    tbl.string('name', 225).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('friends_for_t');
};
