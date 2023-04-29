const { createClient } = require('@supabase/supabase-js');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function createNewUser(userData) {
  const { email, password } = userData;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  console.log(data);
  const user = data?.user;

  if (error) {
    console.log(error);
    return { success: false, message: error.message };
  }

  return {
    success: true,
    message: 'User created successfully',
    user,
  };
}

async function updateUserMetadata(userId, metadata) {
  const { data: updatedUser, error } = await supabase
    .from('users')
    .update({ metadata })
    .match({ id: userId })
    .single();

  if (error) {
    console.error(error);
    return { success: false, message: 'Failed to update user metadata' };
  }

  return {
    success: true,
    message: 'User updated successfully',
    user: updatedUser,
  };
}

const deleteUser = async (userId) => {
  const { data: user, error } = await supabase.auth.deleteUser(userId);

  if (error) {
    console.log(error);
    throw new Error('Error deleting user');
  }

  return { message: 'User deleted successfully', user: user };
};

// usersLogic.js
// create an signIn function
async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  const user = data?.user;
  const session = data?.session;

  if (error) {
    console.error(error);
    return { success: false, message: 'Failed to sign in' };
  }

  return {
    success: true,
    message: 'User signed in successfully',
    user,
    session,
  };
}

// create an signOut function
async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return { success: false, message: 'Failed to sign out' };
  }

  return { success: true, message: 'User signed out successfully' };
}

const updateUser = async (req, res) => {
  const { data } = req.body;
  const { user } = req;

  try {
    if (!user) {
      throw new Error('User not signed in');
    }

    const { data: updatedUser, error } = await supabase.auth.updateUser({
      id: user.id,
      data,
    });

    if (error) {
      throw error;
    }

    res.status(200).json({
      status: 'success',
      user: updatedUser,
    });
  } catch (error) {
    console.error('Failed to update user', error);
    res.status(400).json({
      status: 'error',
      message: 'Failed to update user',
      details: error,
    });
  }
};


module.exports = {
  createNewUser,
  updateUserMetadata,
  deleteUser,
  updateUser,
  signIn,
  signOut,
};
