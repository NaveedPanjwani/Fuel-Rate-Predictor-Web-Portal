//const assert = require('chai').assert;
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server.js');
const chai = require('chai');

chai.use(require('chai-like'));
chai.use(require('chai-things'));

describe('auth', () => {
  it('Testing Login with token as response', (done) => {
    request(app)
      .post('/api/auth')
      .send({ username: 'robotrobot', password: 'passwordpassword' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('token');
        done();
      })
      .catch((err) => done(err));
  });
  it('Testing Login with username not in database', (done) => {
    request(app)
      .post('/api/auth')
      .send({ username: 'wrongusername', password: 'passwordpassword' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('Username not in the System');
        done();
      })
      .catch((err) => done(err));
  });
  it('Testing Login with wrong password', (done) => {
    request(app)
      .post('/api/auth')
      .send({ username: 'robotrobot', password: 'wrongpassword' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('errors');
        //expect(res.body).length.of.at.least(1);
        /*expect(body).to.contain.something.like({
          msg: 'Password is not correct',
        });
        */
        done();
      })
      .catch((err) => done(err));
  });
  it('Testing Login with short username', (done) => {
    request(app)
      .post('/api/auth')
      .send({ username: 'short', password: 'wrongpassword' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('Please include valid email');
        done();
      })
      .catch((err) => done(err));
  });
  it('Testing Login with short password', (done) => {
    request(app)
      .post('/api/auth')
      .send({ username: 'robotrobot', password: 'small' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('Password is not correct');
        done();
      })
      .catch((err) => done(err));
  });
});
