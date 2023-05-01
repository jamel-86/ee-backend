const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./auth");
const app = express();
const projectsRouter = require("./projects");
const port = process.env.PORT || 3004;

app.use(bodyParser.json());
app.use("/api/auth", authRouter);
app.use("/api/projects", projectsRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;
