const Eris = require("eris");
require("dotenv").config();

const bot = new Eris(process.env.token);

bot.on("ready", () => {
  // Only work for bots
  console.log(
    `Logged in as ${bot.user.username}#${bot.user.discriminator} (${bot.user.id})`
  );
  bot.editStatus("online", {
    name: "Copilot",
    type: 0, // 0: Playing, 1: Streaming, 2: Listening, 3: Watching, 4: Custom
  });
});

bot.on("error", (err) => {
  console.error(err);
});

bot.connect();
