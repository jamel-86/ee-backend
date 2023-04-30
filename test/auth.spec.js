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

// Test for auth routes
describe("Test for auth routes", () => {
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
    });

    it("should return 401 if user is not authenticated", async () => {
      const response = await request(app).get("/api/auth/isAuthenticated");
      expect(response.status).to.equal(401);
      expect(response.body.error).to.equal("User is not authenticated");
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
});

// Path: test/auth.spec.js
