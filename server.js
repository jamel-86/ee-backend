const express = require("express");
const cors = require("cors");
const usersRoute = require("./usersRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRoute);

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
