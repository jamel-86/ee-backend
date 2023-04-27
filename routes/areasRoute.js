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

// Get all areas
router.get('/areas', async (req, res) => {
  const { data: areas, error } = await supabase
    .from('areas')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ areas });
});

// Get a specific area by ID
router.get('/areas/:id', async (req, res) => {
  const { id } = req.params;

  const { data: areas, error } = await supabase
    .from('areas')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!areas) {
    return res.status(404).json({ message: 'mqtt entity not found' });
  }

  return res.status(200).json({ areas });
});

// Create a new area
router.post('/areas', async (req, res) => {
  const { name, address } = req.body;

  const { data: areas, error } = await supabase
    .from('areas')
    .insert({ name, address })
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json({ areas });
});

// Delete a area by ID
router.delete('/areas/:id', async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from('areas').delete().eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.sendStatus(204);
});

// Update a area by ID
router.patch('/areas/:id', async (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;

  const { data: areas, error } = await supabase
    .from('areas')
    .update({ name, address })
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ areas });
});

module.exports = router;
