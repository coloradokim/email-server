exports.up = (knex, Promise) => {
  return knex.schema.createTable('first_contact_info', (table) => {
    table.increments();
    table.string('email').unique().notNullable();
    table.varchar('phone')
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};


exports.down = (knex, Promise) => {
  return knex.schema.dropTable('first_contact_info');
};
