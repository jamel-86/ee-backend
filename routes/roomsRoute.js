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

// Get all rooms
router.get('/rooms', async (req, res) => {
  const { data: rooms, error } = await supabase
    .from('rooms')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ rooms });
});

// Get a specific room by ID
router.get('/rooms/:id', async (req, res) => {
  const { id } = req.params;

  const { data: room, error } = await supabase
    .from('rooms')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!room) {
    return res.status(404).json({ message: 'room not found' });
  }

  return res.status(200).json({ room });
});

// Create a new room
router.post('/rooms', async (req, res) => {
  const { name, address } = req.body;

  const { data: room, error } = await supabase
    .from('rooms')
    .insert({ name, address })
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json({ room });
});

// Delete a room by ID
router.delete('/rooms/:id', async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from('rooms').delete().eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.sendStatus(204);
});

// Update a room by ID
router.patch('/rooms/:id', async (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;

  const { data: room, error } = await supabase
    .from('rooms')
    .update({ name, address })
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ room });
});

module.exports = router;
