const { Client, GatewayIntentBits } = require("discord.js");
const { DateTime } = require("luxon");
require('dotenv').config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});


const access_token = process.env.TOKEN
const channelIdToCheck = process.env.CHANNEL_ID;

client.on("messageCreate", (message) => {
  if (message.channel.id === channelIdToCheck) {
    const timeRegex = /(\d{2}:\d{2} [A-Za-z]+)\b/g;
    const matches = message.content.match(timeRegex);

    if (matches) {
      matches.forEach((match) => {
        const [timeStr, timezone] = match.split(" ");
        const time = DateTime.fromFormat(timeStr, "HH:mm", { zone: timezone });

        if (time.isValid) {
          const timestamp = time.toSeconds();
          const relativeTime = `<t:${timestamp}:R>`;

          message.channel.send(`That's ${relativeTime} in relative time`);
        }
      });
    }
  }
});

client.login(access_token);
