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

// Get all floors
router.get('/floors', async (req, res) => {
  const { data: floor, error } = await supabase
    .from('floors')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ floor });
});

// Get a specific floor by ID
router.get('/floors/:id', async (req, res) => {
  const { id } = req.params;

  const { data: floor, error } = await supabase
    .from('floors')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!floor) {
    return res.status(404).json({ message: 'floor not found' });
  }

  return res.status(200).json({ floor });
});

// Create a new floor
router.post('/floors', async (req, res) => {
  const { name, address } = req.body;

  const { data: floor, error } = await supabase
    .from('floors')
    .insert({ name, address })
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json({ floor });
});

// Delete a floor by ID
router.delete('/floors/:id', async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from('floors').delete().eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.sendStatus(204);
});

// Update a floor by ID
router.patch('/floors/:id', async (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;

  const { data: floors, error } = await supabase
    .from('floors')
    .update({ name, address })
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ floors });
});

module.exports = router;
