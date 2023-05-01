// projects.js

const express = require("express");
const { createClient } = require("@supabase/supabase-js");

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

// Get all projects by date order
projectsRouter.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    res.json(data);
  } catch (error) {
    console.error("Failed to get projects", error);
    res.status(500).json({ error: "Failed to get projects" });
  }
});

module.exports = projectsRouter;
