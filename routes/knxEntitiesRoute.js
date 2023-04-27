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

// Get all KNX entities
router.get('/knx_entities', async (req, res) => {
  const { data: knxEntities, error } = await supabase
    .from('knx_entities')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ knxEntities });
});

// Get a specific KNX entity by ID
router.get('/knx_entities/:id', async (req, res) => {
  const { id } = req.params;

  const { data: knxEntity, error } = await supabase
    .from('knx_entities')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!knxEntity) {
    return res.status(404).json({ message: 'KNX entity not found' });
  }

  return res.status(200).json({ knxEntity });
});

// Create a new KNX entity
router.post('/knx_entities', async (req, res) => {
  const { name, address } = req.body;

  const { data: knxEntity, error } = await supabase
    .from('knx_entities')
    .insert({ name, address })
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json({ knxEntity });
});

// Delete a KNX entity by ID
router.delete('/knx_entities/:id', async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from('knx_entities').delete().eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.sendStatus(204);
});

// Update a KNX entity by ID
router.patch('/knx_entities/:id', async (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;

  const { data: knxEntity, error } = await supabase
    .from('knx_entities')
    .update({ name, address })
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ knxEntity });
});

module.exports = router;
