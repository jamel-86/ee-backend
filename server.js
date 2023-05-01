const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./auth");
const app = express();
const projectsRouter = require("./api/projects");
const port = process.env.PORT || 3004;

app.use(bodyParser.json());
app.use("/api/auth", authRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/projects/:id", projectsRouter);
app.use("/api/projects/user/:id", projectsRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;
