exports.up = (knex, Promise) => {
  return knex.schema.createTable('first_contact_info', (table) => {
    table.increments().notNullable;
    table.text('first_name');
    table.text('email').unique().notNullable();
    table.text('phone');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};


exports.down = (knex, Promise) => {
  return knex.schema.dropTable('first_contact_info');
};
