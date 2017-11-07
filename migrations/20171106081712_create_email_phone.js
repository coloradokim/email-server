exports.up = (knex, Promise) => {
  return knex.schema.createTable('email_phone', (table) => {
    table.increments();
    table.string('email').unique().notNullable();
    table.varchar('phone').unique().notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('email_phone');
};
