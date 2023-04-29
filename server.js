const express = require("express");
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const cors = require('cors');
const usersRoute = require('./routes/usersRoute');
const projectsRoute = require('./routes/projectsRoute');
const buildingsRoute = require('./routes/buildingsRoute');
const floorsRoute = require('./routes/floorsRoute');
const roomsRoute = require('./routes/roomsRoute');
const areasRoute = require('./routes/areasRoute');
const zonesRoute = require('./routes/zonesRoute');
const knxEntitiesRoute = require('./routes/knxEntitiesRoute');
const mqttEntitiesRoute = require('./routes/mqttEntitiesRoute');
const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', usersRoute);
app.use('/projects', projectsRoute);
app.use('/buildings', buildingsRoute);
app.use('/floors', floorsRoute);
app.use('/rooms', roomsRoute);
app.use('/areas', areasRoute);
app.use('/zones', zonesRoute);
app.use('/knxEntities', knxEntitiesRoute);
app.use('/mqttEntities', mqttEntitiesRoute);

// Middleware to handle Supabase authentication
app.use(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    try {
      const { data: user } = await supabase.auth.api.getUser(authHeader);
      req.user = user;
    } catch (error) {
      console.log('Failed to authenticate user:', error);
    }
  }
  next();
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;