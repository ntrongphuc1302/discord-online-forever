const Eris = require("eris");
require("dotenv").config();

const bot = new Eris(process.env.token);

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.username} (${bot.user.id})`);
});

bot.on("error", (err) => {
  console.error(err);
});

bot.connect();
