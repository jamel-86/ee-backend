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

// Get all buildings
router.get('/buildings', async (req, res) => {
  const { data: buildings, error } = await supabase
    .from('buildings')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ buildings });
});

// Get a specific building by ID
router.get('/buildings/:id', async (req, res) => {
  const { id } = req.params;

  const { data: buildings, error } = await supabase
    .from('buildings')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!building) {
    return res.status(404).json({ message: 'building not found' });
  }

  return res.status(200).json({ buildings });
});

// Create a new building
router.post('/buildings', async (req, res) => {
  const { name, address } = req.body;

  const { data: building, error } = await supabase
    .from('buildings')
    .insert({ name, address })
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json({ building });
});

// Delete a building by ID
router.delete('/buildings/:id', async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from('buildings').delete().eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.sendStatus(204);
});

// Update a building by ID
router.patch('/buildings/:id', async (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;

  const { data: building, error } = await supabase
    .from('buildings')
    .update({ name, address })
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ building });
});

module.exports = router;
