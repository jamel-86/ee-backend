const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authRouter = express.Router();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

authRouter.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    res.json({ message: "User sign up successful!" });
  } catch (error) {
    console.error("Failed to sign up user", error);
    res.status(500).json({ error: "Failed to sign up user" });
  }
});

authRouter.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    const userId = data.user.id;
    const payload = {
      sub: userId,
      iat: Date.now(),
      exp: Date.now() + 60 * 60 * 1000,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.status(200).json({
      accessToken: token,
    });
  } catch (error) {
    console.error("Failed to sign in user", error);
    res.status(500).json({ error: "Failed to sign in user" });
  }
});

authRouter.post("/signOut", async (req, res) => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;

    res.clearCookie("sb:token");
    res.clearCookie("sb:refresh_token");

    res.json({ message: "User signed out successfully!" });
  } catch (error) {
    console.error("Failed to sign out user", error);
    res.status(500).json({ error: "Failed to sign out user" });
  }
});

// Router to check if user is authenticated with supabase
authRouter.get("/isAuthenticated", async (req, res) => {
  let userId;
  try {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decodedToken);
      userId = decodedToken.sub;
      // Check if the token is expired
      if (decodedToken.exp < Date.now()) {
        console.log("Token is expired");
        throw new Error("Token is expired");
      } else {
        console.log("Token is not expired");
      }
      // Check if the user is authenticated
      if (decodedToken.sub) {
        console.log("User is authenticated", userId);
      } else {
        console.log("User is not authenticated");
      }
    } catch (error) {
      console.log(error.message);
      throw new Error("Invalid token");
    }
    res.json({ message: "User is authenticated!", userId });
  } catch (error) {
    console.error("User is not authenticated", error);
    res.status(401).json({ error: "User is not authenticated" });
  }

  // route to retrieve active session
  authRouter.get("/session", async (req, res) => {
    try {
      const { data: session, error } = await supabase.auth.getSession();
      if (error) throw error;
      res.json({ session });
    } catch (error) {
      console.error("Failed to get session", error);
      res.status(500).json({ error: "Failed to get session" });
    }
  });

  // update a users metadata in the data object as json on this  supabase.auth.updateUser()
  authRouter.put("/updateUser", async (req, res) => {
    const { data, error } = await supabase.auth.updateUser({
      data: req.body.data,
    });
    if (error) {
      console.error("Failed to update user", error);
      res.status(500).json({ error: "Failed to update user" });
    }
    res.json({ message: "User updated successfully!" });
  });

  // route to delete user
  authRouter.delete("/deleteUser", async (req, res) => {
    const id = req.body.userId;
    try {
      const { error } = await supabase.auth.admin.deleteUser(id);
      if (error) throw error;
      res.json({ message: "User deleted successfully!" });
    } catch (error) {
      console.error("Failed to delete user", error);
      res.status(500).json({ error: "Failed to delete user" });
    }
  });
});

module.exports = authRouter;
