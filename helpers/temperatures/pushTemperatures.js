const mqtt = require("mqtt");
const { createClient } = require("@supabase/supabase-js");

// Replace with your MQTT broker URL
const MQTT_BROKER_URL = "mqtt://your-broker-url";

// Replace with your Supabase URL and API key
const SUPABASE_URL = "https://your-supabase-url.supabase.co";
const SUPABASE_API_KEY = "your-supabase-api-key";

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

// Connect to the MQTT broker
client.on("connect", () => {
  // Subscribe to topics
  client.subscribe("livingroom/temperature/roomtemp");
  client.subscribe("livingroom/temperature/ceilingtemp");
});

client.on("message", async (topic, message) => {
  const room = topic.split("/")[0];
  const temperature = parseFloat(message.toString());

  // Save temperature and room data to the database
  const { error } = await supabase.from("temperatures").insert([
    {
      room: room,
      temperature: temperature,
      timestamp: new Date(),
    },
  ]);

  if (error) {
    console.error("Error inserting data:", error);
  }
});
