var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('email_phone route');
});

router.post('/', (req, res, next) => {
  //Insert req.body into the db
  res.send(201)
})

module.exports = router;
