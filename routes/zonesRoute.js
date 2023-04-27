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

// Get all zones
router.get('/zones', async (req, res) => {
  const { data: zones, error } = await supabase
    .from('zones')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ zones });
});

// Get a specific zone by ID
router.get('/zones/:id', async (req, res) => {
  const { id } = req.params;

  const { data: zone, error } = await supabase
    .from('zones')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!zone) {
    return res.status(404).json({ message: 'zone not found' });
  }

  return res.status(200).json({ zone });
});

// Create a new zone
router.post('/zones', async (req, res) => {
  const { name, address } = req.body;

  const { data: zone, error } = await supabase
    .from('zones')
    .insert({ name, address })
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json({ zone });
});

// Delete a zone by ID
router.delete('/zones/:id', async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from('zones').delete().eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.sendStatus(204);
});

// Update a zone by ID
router.patch('/zones/:id', async (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;

  const { data: zone, error } = await supabase
    .from('zones')
    .update({ name, address })
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ zone });
});

module.exports = router;
