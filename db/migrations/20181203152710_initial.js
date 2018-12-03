
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('artists', function(table){
      table.increments('id').primary();
      table.string('name');
      table.string('genre')
      table.timestamps(true, true)
    }),
    
    knex.schema.createTable('albums', function(table){
      table.increments('id').primary();
      table.string('title')
      table.string('release_date')
      table.integer('artist_id').unsigned()
      table.foreign('artist_id')
        .references('artists.id')

      table.timestamps(true, true)
    })
  ]) 
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('artists'),
    knex.schema.dropTable('albums')
  ])
};
