// projects.js is a router that handles all requests to /api/projects
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
// require path
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const projectsRouter = express.Router();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Define a function to create a new project in the database
async function createProject(
  name,
  description,
  createdBy,
  timezone,
  location,
  image
) {
  // Insert the new project into the database using Supabase client
  const { data, error } = await supabase.from("projects").insert({
    name,
    description,
    created_by: createdBy,
    timezone,
    location,
    image,
  });

  if (error) {
    console.error("Failed to create project", error);
    throw new Error("Failed to create project");
  }

  return data[0];
}

// Create a new project
projectsRouter.post("/", async (req, res) => {
  const { name, description, createdBy, timezone, location, image } = req.body;

  try {
    const project = await createProject(
      name,
      description,
      createdBy,
      timezone,
      location,
      image
    );

    res.json({ message: "Project created successfully", project });
  } catch (error) {
    console.error("Failed to create project", error);
    res.status(500).json({ error: "Failed to create project" });
  }
});

// Get all projects by date order (only for admin, normal users can't access all projects)
projectsRouter.get("/", async (req, res) => {
  const { orderAsc } = req.query;
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: orderAsc === "true" });

    if (error) throw error;

    res.json(data);
  } catch (error) {
    console.error("Failed to get projects", error);
    res.status(500).json({ error: "Failed to get projects" });
  }
});

// get all projects that belong to a user
projectsRouter.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { orderAsc } = req.query;
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("created_by", id)
      .order("created_at", { ascending: orderAsc === "true" });
    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error("Failed to get projects", error);
    res.status(500).json({ error: "Failed to get projects" });
  }
});

// Get a project by id
projectsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error("Failed to get project", error);
    res.status(500).json({ error: "Failed to get project" });
  }
});

// Update a project by id
projectsRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, timezone, location, image } = req.body;
  try {
    const { data, error } = await supabase
      .from("projects")
      .update({ name, description, timezone, location, image })
      .eq("id", id);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error("Failed to update project", error);
    res.status(500).json({ error: "Failed to update project" });
  }
});

// Delete a project by id
projectsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error("Failed to delete project", error);
    res.status(500).json({ error: "Failed to delete project" });
  }
});

module.exports = projectsRouter;
