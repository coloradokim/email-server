exports.seed = function(knex, Promise) {
  return knex('first_contact_info').del()
    .then(function () {
      return knex('first_contact_info').insert([
        {first_name: 'kim', email: 'kim@hirediversity.us', phone: '7194294831'},
        {first_name: 'nina', email: 'nina@hirediversity.us', phone: '7032200704'},
      ]);
    });
};
