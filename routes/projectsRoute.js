// Import required modules
const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Get all projects
router.get('/projects', async (req, res) => {
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ projects });
});

// Get a specific project by ID
router.get('/projects/:id', async (req, res) => {
  const { id } = req.params;

  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!project) {
    return res.status(404).json({ message: 'project not found' });
  }

  return res.status(200).json({ project });
});

// Create a new project
router.post('/projects', async (req, res) => {
  const { name, address } = req.body;

  const { data: project, error } = await supabase
    .from('projects')
    .insert({ name, address })
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json({ project });
});

// Delete a project by ID
router.delete('/projects/:id', async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from('projects').delete().eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.sendStatus(204);
});

// Update a project by ID
router.patch('/projects/:id', async (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;

  const { data: project, error } = await supabase
    .from('projects')
    .update({ name, address })
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ project });
});

module.exports = router;
