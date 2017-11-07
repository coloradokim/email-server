process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../app');
const knex = require('../db/knex');

describe('routes : email_phone', () => {

  beforeEach((done) => {
    knex.migrate.rollback()
    .then(() => {
      knex.migrate.latest()
      .then(() => {
        knex.seed.run()
        .then(() => {
          done();
        })
      });
    });
  });

  afterEach((done) => {
    knex.migrate.rollback()
    .then(() => {
      done();
    });
  });

});

describe('POST /api/v1/email_phone', () => {
  it('should respond with a success message along with a single entry that was added', (done) => {
    chai.request(server)
    .post('/api/v1/email_phone')
    .send({
      email: 'kim@hirediversity.us',
      phone: 1234567890
    })
    .end((err, res) => {
      // there should be no errors
      should.not.exist(err);
      // there should be a 201 status code
      // (indicating that something was "created")
      res.status.should.equal(201);
      // the response should be JSON
      res.type.should.equal('application/json');
      // the JSON response body should have a
      // key-value pair of {"status": "success"}
      res.body.status.should.eql('success');
      res.body.data[0].should.include.keys(
        'id', 'email', 'phone', 'created_at'
      );
      done();
    });
  });
});
