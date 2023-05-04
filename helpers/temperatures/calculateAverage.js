const { DateTime } = require("luxon");
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "your_supabase_url";
const supabaseKey = "your_supabase_key";
const supabase = createClient(supabaseUrl, supabaseKey);

async function calculateAverageTemperature() {
  // Get the current timestamp and the timestamp for one hour ago
  const now = DateTime.now();
  const oneHourAgo = now.minus({ hours: 1 });

  // Fetch the data from Supabase for the last hour
  const { data, error } = await supabase
    .from("temperature_data")
    .select("*")
    .gte("timestamp", oneHourAgo.toISO())
    .lte("timestamp", now.toISO());

  if (error) {
    console.error("Error fetching data:", error);
    return;
  }

  // Calculate the average temperature per room
  const rooms = {};
  data.forEach((record) => {
    const { room, temperature } = record;
    if (!rooms[room]) {
      rooms[room] = { sum: 0, count: 0 };
    }
    rooms[room].sum += temperature;
    rooms[room].count++;
  });

  const averages = {};
  for (const [room, { sum, count }] of Object.entries(rooms)) {
    averages[room] = sum / count;
  }

  console.log("Average temperatures:", averages);
  // Store the average temperatures in Supabase or another database as needed
}

calculateAverageTemperature();
