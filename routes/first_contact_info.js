var express = require('express');
var router = express.Router();
var dbConnection = require('../db/knex');

router.post('/', (req, res, next) => {
  const newEmail = req.body.email;
  const newPhone = req.body.phone;
  dbConnection('first_contact_info')
    .insert({
      email: newEmail,
      phone: newPhone
    })
    .returning('*')
    .then((newInfo) => {
      res.status(201).json({
        status: 'success',
        data: newInfo
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    });
});
module.exports = router;
