const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./auth");
const app = express();
const port = process.env.PORT || 3005;

app.use(bodyParser.json());
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;
