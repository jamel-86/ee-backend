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

describe('User tests', () => {
  let userId;
  let accessToken;

  before('Create a new user', async function () {
    const email = 'johndoe@example.com';
    const password = 'password123';
    const {
      body: { user },
    } = await supertest(app)
      .post('/users')
      .send({ email, password })
      .expect(201)
      .timeout(10000);

    userId = user.id;
    // set the timeout limit to 10 seconds
  });

  // sign in the user and get an access token
  before('Sign in the user and get an access token', async function () {
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

      accessToken = session.access_token;
      // console.log('### session: ' + session);
    } catch (err) {
      console.error(err);
      throw err;
    }
  });

  it('should update an existing user', (done) => {
    console.log('### access_token: ' + accessToken);
    supertest(app)
      .patch(`/users/${userId}`)
      .set('Authorization', `Bearer ${accessToken}`)
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
