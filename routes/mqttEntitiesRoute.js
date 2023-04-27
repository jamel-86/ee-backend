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

// Get all mqtt entities
router.get('/mqtt_entities', async (req, res) => {
  const { data: mqttEntities, error } = await supabase
    .from('mqtt_entities')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ mqttEntities });
});

// Get a specific mqtt entity by ID
router.get('/mqtt_entities/:id', async (req, res) => {
  const { id } = req.params;

  const { data: mqttEntity, error } = await supabase
    .from('mqtt_entities')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!mqttEntity) {
    return res.status(404).json({ message: 'mqtt entity not found' });
  }

  return res.status(200).json({ mqttEntity });
});

// Create a new mqtt entity
router.post('/mqtt_entities', async (req, res) => {
  const { name, address } = req.body;

  const { data: mqttEntity, error } = await supabase
    .from('mqtt_entities')
    .insert({ name, address })
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json({ mqttEntity });
});

// Delete a mqtt entity by ID
router.delete('/mqtt_entities/:id', async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from('mqtt_entities').delete().eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.sendStatus(204);
});

// Update a mqtt entity by ID
router.patch('/mqtt_entities/:id', async (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;

  const { data: mqttEntity, error } = await supabase
    .from('mqtt_entities')
    .update({ name, address })
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ mqttEntity });
});

module.exports = router;
