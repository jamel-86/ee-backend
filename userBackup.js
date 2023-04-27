const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config({ path: "/home/james/ee-backend/.env" });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function getUsers() {
  const {
    data: { users },
    error,
  } = await supabase.auth.admin.listUsers();

  if (error) {
    console.log(error);
    return;
  }

  const jsonData = JSON.stringify(users);
  fs.writeFile("/home/james/ee-backend/backups/users.json", jsonData, (err) => {
    if (err) throw err;
    console.log("Users data written to new file");
  });
}

getUsers();
