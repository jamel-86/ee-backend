// Desc: Test for auth routes
const request = require("supertest");
const app = require("../server");
const { expect } = require("chai");

// signUp a new user and return the response
const signUp = async (email, password) => {
  const response = await request(app)
    .post("/api/auth/signup")
    .send({ email, password });
  console.log("signUp Response: ", response.status);
  return response;
};

// get the active session and retunr the user id
const getActiveSession = async () => {
  const response = await request(app).get("/api/auth/session");
  return response;
};

// signIn a user and return the response
const signIn = async (email, password) => {
  const response = await request(app)
    .post("/api/auth/signin")
    .send({ email, password });
  return response;
};

// signOut a user and return the response
const signOut = async () => {
  const response = await request(app).post("/api/auth/signout");
  return response;
};

// update a user and return the response
const updateUser = async (userId, email, password) => {
  const response = await request(app)
    .put("/api/auth/updateUser")
    .send({ data });
  return response;
};

// Test for auth routes
describe("Test for auth routes", () => {
  let userId;
  // Test for sign up
  describe("POST /api/auth/signup", () => {
    it("should sign up a new user", async () => {
      const response = await signUp("johnDoe@mail.test", "123456");
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("User sign up successful!");
    });
  });
  // Test for check if user is authenticated, first sign in a user
  describe("GET /api/auth/isAuthenticated", () => {
    it("should check if user is authenticated", async () => {
      const accessToken = await signIn("johnDoe@mail.test", "123456");
      const newToken = accessToken.body.accessToken;
      const response = await request(app)
        .get("/api/auth/isAuthenticated")
        .set("Authorization", `Bearer ${newToken}`);
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("User is authenticated!");
      userId = response.body.userId;
    });

    it("should return 401 if user is not authenticated", async () => {
      const response = await request(app).get("/api/auth/isAuthenticated");
      expect(response.status).to.equal(401);
      expect(response.body.error).to.equal("User is not authenticated");
    });
  });

  // Test for updating a user, first sign in a user, then get the Auth session
  describe("PUT /api/auth/updateUser", () => {
    it("should update a user", async () => {
      const accessToken = await signIn("johnDoe@mail.test", "123456");
      const newToken = accessToken.body.accessToken;
      const auth = await request(app)
        .get("/api/auth/isAuthenticated")
        .set("Authorization", `Bearer ${newToken}`);
      expect(auth.status).to.equal(200);
      expect(auth.body.message).to.equal("User is authenticated!");
      const response = await request(app)
        .put("/api/auth/updateUser")
        .set("Authorization", `Bearer ${newToken}`)
        .send({ data: { first_name: "John", last_name: "Doe" } });
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("User updated successfully!");
    });
  });

  // Test for sign out
  describe("POST /api/auth/signout", () => {
    it("should sign out a user", async () => {
      const response = await signOut();
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("User signed out successfully!");
    });
  });
  // Test for deleting a user /api/auth/deleteUser by first retrieving the user id
  describe("DELETE /api/auth/deleteUser", () => {
    it("should get the user id and delete the user", async () => {
      const accessToken = await signIn("johnDoe@mail.test", "123456");
      const newToken = accessToken.body.accessToken;
      console.log("### userId: ", userId);
      const response = await request(app)
        .delete("/api/auth/deleteUser")
        .set("Authorization", `Bearer ${newToken}`)
        .send({ userId });
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("User deleted successfully!");
    });
  });
});

// Path: test/auth.spec.js
