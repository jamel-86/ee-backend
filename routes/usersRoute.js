const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');
const {
  createNewUser,
  deleteUser,
  updateUser,
  updateUserMetadata,
  signIn,
  signOut,
} = require('../logics/usersLogic');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Get all users
router.get('/', async (req, res) => {
  const { data: users, error } = await supabase.auth.admin.listUsers();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!users || users.length === 0) {
    return res.status(404).json({ message: 'Users not found' });
  }

  return res.status(200).json({ users });
});

// Get user by id
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const { data: user, error } = await supabase.auth.admin.getUserById(userId);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.status(200).json({ user });
});

// Create new user
router.post('/', async (req, res) => {
  const { body: userData } = req;
  const result = await createNewUser(userData);

  if (!result.success) {
    return res.status(400).json({ error: result.message });
  }

  return res.status(201).json({ user: result.user });
});

// Delete user
router.delete('/:userId', async (req, res) => {
  const {
    params: { userId },
  } = req;

  const result = await deleteUser(userId);

  return res.status(200).json({ message: result.message });
});

// Update user metadata
router.patch('/:userId/metadata', async (req, res) => {
  const {
    params: { userId },
    body: { metadata },
  } = req;

  const result = await updateUserMetadata(userId, metadata);

  if (!result.success) {
    return res.status(400).json({ error: result.message });
  }

  return res.status(200).json({ user: result.user });
});

// Update user
router.patch('/:userId', async (req, res) => {
  const {
    params: { userId },
    body: newData,
  } = req;

  const result = await updateUser(userId, newData);

  if (!result.success) {
    return res.status(400).json({ error: result.message });
  }

  return res.status(200).json({ user: result.user });
});

// Sign in user
router.post('/signin', async (req, res) => {
  console.log('signing in user');
  const { email, password } = req.body;

  const { success, message, user, session } = await signIn(email, password);

  if (!success) {
    return res.status(400).json({ error: message });
  }

  console.log('user signed in:', user);
  return res.status(200).json({ user, session });
});

// Sign out user
router.post('/signout', async (req, res) => {
  console.log('signing out user');
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log('error signing out user:', error);
    return res.status(400).json({ error: error.message });
  }

  console.log('user signed out');
  return res.status(200).json({ message: 'User signed out' });
});

module.exports = router;
