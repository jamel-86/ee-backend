const express = require("express");
const cors = require("cors");
const usersRoute = require('./routes/usersRoute');
const projectsRoute = require('./routes/projectsRoute');
const buildingsRoute = require('./routes/buildingsRoute');
const floorsRoute = require('./routes/floorsRoute');
const roomsRoute = require('./routes/roomsRoute');
const areasRoute = require('./routes/areasRoute');
const zonesRoute = require('./routes/zonesRoute');
const knxEntitiesRoute = require('./routes/knxEntitiesRoute');
const mqttEntitiesRoute = require('./routes/mqttEntitiesRoute');

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

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;