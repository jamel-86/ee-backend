PS D:\ee-backend> yarn test
yarn run v1.22.17
$ mocha
Server is listening on port 3005


  GET /users
(node:9952) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
    ✔ should return all users (815ms)

  GET /users/:userId
    ✔ should return a user by ID (207ms)

  POST /users
{
  user: {
    id: '438c01c5-61c7-44a5-9894-6cec9f569748',
    aud: 'authenticated',
    role: 'authenticated',
    email: 'johndoe@example.com',
    email_confirmed_at: '2023-04-28T03:11:06.616398878Z',
    phone: '',
    last_sign_in_at: '2023-04-28T03:11:06.618733121Z',
    app_metadata: { provider: 'email', providers: [Array] },
    user_metadata: {},
    identities: [ [Object] ],
    created_at: '2023-04-28T03:11:06.612766Z',
    updated_at: '2023-04-28T03:11:06.620213Z'
  },
  session: {
    access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjgyNjU1MDY2LCJzdWIiOiI0MzhjMDFjNS02MWM3LTQ0YTUtOTg5NC02Y2VjOWY1Njk3NDgiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTY4MjY1MTQ2Nn1dLCJzZXNzaW9uX2lkIjoiMGFkNjE0M2EtMjY4Yy00YjQzLWJmZGYtYmEyMmM2ZTMyMmQ3In0.a5-00P7cgO6nryAItsRCwPbvpYB0b_672cdbBaYb1JM',
    token_type: 'bearer',
    expires_in: 3600,
    refresh_token: 'jDPsIznayRbHIJXKd3Za0w',
    user: {
      id: '438c01c5-61c7-44a5-9894-6cec9f569748',
      aud: 'authenticated',
      role: 'authenticated',
      email: 'johndoe@example.com',
      email_confirmed_at: '2023-04-28T03:11:06.616398878Z',
      phone: '',
      last_sign_in_at: '2023-04-28T03:11:06.618733121Z',
      app_metadata: [Object],
      user_metadata: {},
      identities: [Array],
      created_at: '2023-04-28T03:11:06.612766Z',
      updated_at: '2023-04-28T03:11:06.620213Z'
    },
    expires_at: 1682655067
  }
}
    ✔ should create a new user (5254ms)
signing in now...
signing in user
    1) should sign in the user and get an access token
AuthSessionMissingError: Auth session missing!
    at SupabaseAuthClient.<anonymous> (D:\ee-backend\node_modules\@supabase\gotrue-js\dist\main\GoTrueClient.js:589:27)
    at Generator.next (<anonymous>)
    at fulfilled (D:\ee-backend\node_modules\@supabase\gotrue-js\dist\main\GoTrueClient.js:5:58)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  __isAuthError: true,
  status: 400
}
    2) should update an existing user
{ error: 'Failed to update user' }


  3 passing (16s)
  2 failing

  1) POST /users
       should sign in the user and get an access token:
     Error: Timeout of 10000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. 
(D:\ee-backend\test\users.spec.js)
      at listOnTimeout (node:internal/timers:564:17)
      at process.processTimers (node:internal/timers:507:7)

  2) POST /users
       should update an existing user:
     Error: expected 200 "OK", got 400 "Bad Request"
      at Context.<anonymous> (test\users.spec.js:85:8)
      at process.processImmediate (node:internal/timers:471:21)
  ----
      at Test._assertStatus (node_modules\supertest\lib\test.js:252:14)
      at D:\ee-backend\node_modules\supertest\lib\test.js:308:13
      at Test._assertFunction (node_modules\supertest\lib\test.js:285:13)
      at Test.assert (node_modules\supertest\lib\test.js:164:23)
      at Server.localAssert (node_modules\supertest\lib\test.js:120:14)
      at Object.onceWrapper (node:events:627:28)
      at Server.emit (node:events:513:28)
      at emitCloseNT (node:net:1880:8)
      at process.processTicksAndRejections (node:internal/process/task_queues:81:21)
