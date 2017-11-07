function createEntry(newEntry) {
  return knex('email_phone').insert(newEntry, '*');
}

module.exports = {
  createEntry
}
