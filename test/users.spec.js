const assert = require('assert');
const supertest = require('supertest');
const app = require('../server');
const moment = require('moment-timezone');

describe('GET /users', () => {
  it('should return all users', (done) => {
    supertest(app)
      .get('/users')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        assert(res.body.users.users.length > 0);
        done();
      });
  });
});

describe('GET /users/:userId', () => {
  it('should return a user by ID', (done) => {
    supertest(app)
      .get('/users/efbd667d-1114-4cd8-aac4-9f0d5f7a5fae') // replace with an actual user ID from your database
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        assert(
          res.body.user.user.id === 'efbd667d-1114-4cd8-aac4-9f0d5f7a5fae'
        ); // replace with the actual user ID
        done();
      });
  });
});

describe('POST /users', () => {
  let userId;

  it('should create a new user', (done) => {
    supertest(app)
      .post('/users')
      .send({
        email: 'johndoe@example.com',
        password: 'password123',
      })
      .expect(201)
      .end((err, res) => {
        if (err) done(err);
        userId = res.body.user.id;
        setTimeout(() => {
          assert(res.body.user.id === userId);
        }, 3000);
        setTimeout(() => {
          done();
        }, 5000); // wait for 5 seconds before making the assertion
      });
  }).timeout(10000); // set the timeout limit to 10 seconds

  // sign in the user and get an access token
  it('should sign in the user and get an access token', async function () {
    console.log('signing in now...');

    try {
      const email = 'johndoe@example.com';
      const password = 'password123';
      console.log('sending sign in request...');
      const {
        body: { session },
      } = await supertest(app)
        .post('/users/signin')
        .send({ email, password })
        .expect(200);

      console.log('signed in successfully!');

      const accessToken = session.access_token;
      console.log('### access_token: ' + accessToken);
      console.log('### session: ' + session);
    } catch (err) {
      console.error(err);
      throw err;
    }
  });

  it('should update an existing user', (done) => {
    supertest(app)
      .patch(`/users/${userId}`)
      .send({
        email: 'updatedemail@example.com',
      })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        console.log(res.body);
        assert(res.body.user.email === 'updatedemail@example.com');
        done();
      });
  });
});

// describe('DELETE /users/:id', () => {
//   it('should delete a user by ID', (done) => {
//     supertest(app)
//       .delete('/users/efbd667d-1114-4cd8-aac4-9f0d5f7a5fae') // replace with an actual user ID from your database
//       .expect(204)
//       .end((err, res) => {
//         if (err) done(err);
//         done();
//       });
//   });
// });
