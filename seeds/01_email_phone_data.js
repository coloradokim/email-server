exports.seed = function(knex, Promise) {
  return knex('email_phone').del()
    .then(function () {
      return knex('email_phone').insert([
        {email: 'kim@hirediversity.us', phone: '1234567890'},
        {email: 'nina@hirediversity.us', phone: '9876543210'},
      ]);
    });
};
