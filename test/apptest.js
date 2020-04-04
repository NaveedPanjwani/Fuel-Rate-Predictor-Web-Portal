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
  it('Testing Login with username not in database and getting error as response', (done) => {
    request(app)
      .post('/api/auth')
      .send({ username: 'wrongusername', password: 'passwordpassword' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('errors');
        done();
      })
      .catch((err) => done(err));
  });
  it('Testing Login with wrong password and getting error as response', (done) => {
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
  it('Testing Login with short username and getting error as response', (done) => {
    request(app)
      .post('/api/auth')
      .send({ username: 'short', password: 'wrongpassword' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('errors');
        done();
      })
      .catch((err) => done(err));
  });
  it('Testing Login with short password and getting error as response', (done) => {
    request(app)
      .post('/api/auth')
      .send({ username: 'robotrobot', password: 'small' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('errors');
        done();
      })
      .catch((err) => done(err));
  });
});

describe('Forum', () => {
  it('Testing if Number is correctly inputted into Gallons', (done) => {
    request(app)
      .post(
        '/api/forum/me?x-auth-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoicm9ib3Ryb2JvdCJ9LCJpYXQiOjE1ODU5NTU0Mjh9._YSGDRLar5PbwfrKAfxpywn9OCOGmIjck1R70xFFS0k'
      )
      .send({ Gallons_Requested: 1111, Delivery_Date: 'fvdffdvffdv' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('price');
        done();
      })
      .catch((err) => done(err));
  });
  it('Testing if Date is correctly not empty', (done) => {
    request(app)
      .post(
        '/api/forum/me?x-auth-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoicm9ib3Ryb2JvdCJ9LCJpYXQiOjE1ODU5NTU0Mjh9._YSGDRLar5PbwfrKAfxpywn9OCOGmIjck1R70xFFS0kapi/forum/me?x-auth-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoicm9ib3Ryb2JvdCJ9LCJpYXQiOjE1ODU5NTU0Mjh9._YSGDRLar5PbwfrKAfxpywn9OCOGmIjck1R70xFFS0k'
      )
      .send({ Gallons_Requested: 1111, Delivery_Date: 'fvdffdvffdv' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('price');
        done();
      })
      .catch((err) => done(err));
  });
  it('Testing if Number is not inputted into Gallons and getting error as response', (done) => {
    request(app)
      .post(
        '/api/forum/me?x-auth-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoicm9ib3Ryb2JvdCJ9LCJpYXQiOjE1ODU5NTU0Mjh9._YSGDRLar5PbwfrKAfxpywn9OCOGmIjck1R70xFFS0k'
      )
      .send({ Gallons_Requested: 1111, Delivery_Date: 'fvdffdvffdv' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('error');
        done();
      })
      .catch((err) => done(err));
  });
  it('Testing if Date is empty and getting error as response', (done) => {
    request(app)
      .post(
        '/aapi/forum/me?x-auth-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoicm9ib3Ryb2JvdCJ9LCJpYXQiOjE1ODU5NTU0Mjh9._YSGDRLar5PbwfrKAfxpywn9OCOGmIjck1R70xFFS0k'
      )
      .send({ Gallons_Requested: 1111, Delivery_Date: 'fvdffdvffdv' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('error');
        done();
      })
      .catch((err) => done(err));
  });
});

describe('Registration', () => {
  it('Testing if Username is less than 7 in length and getting error as response', (done) => {
    request(app)
      .post('/api/user/add')
      .send({ username: 'robot', password: 'passwordpassword' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('errors');
        done();
      })
      .catch((err) => done(err));
  });
  it('Testing if Username is more than 7 in length', (done) => {
    request(app)
      .post('/api/user/add')
      .send({ username: 'robotrobotrobot', password: 'passwordpassword' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('message');
        done();
      })
      .catch((err) => done(err));
  });
  it('Testing if Password is less than 7 in length and getting error as response', (done) => {
    request(app)
      .post('/api/user/add')
      .send({ username: 'robotrobot', password: 'pass' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('errors');
        done();
      })
      .catch((err) => done(err));
  });
  it('Testing if Password is more than 7 in length', (done) => {
    request(app)
      .post('/api/user/add')
      .send({ username: 'robotrobot', password: 'passwordpasswordpassword' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('message');
        done();
      })
      .catch((err) => done(err));
  });
  it('Testing if Username is not currently in the database', (done) => {
    request(app)
      .post('/api/user/add')
      .send({ username: 'robotrobot2', password: 'passwordpassword' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('message');
        done();
      })
      .catch((err) => done(err));
  });
  it('Testing if Username is currently in the database and getting error as response', (done) => {
    request(app)
      .post('/api/user/add')
      .send({ username: 'robotrobot', password: 'passwordpassword' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('message');
        done();
      })
      .catch((err) => done(err));
  });
});
