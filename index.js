const { Client, Collection, MessageEmbed, MessageButton, MessageActionRow, WebhookClient } = require("discord.js");
const client = new Client({ intents: 3276543 });
const { readdirSync } = require("fs");
const fs = require('fs');
const path = require('path');


client.login('token here').catch((e) => {
  console.log(`\n INVALID TOKEN OR MISSING INTENT'S`)
  setTimeout(() => {
    process.exit();
  }, 5000)
});


client.on('ready', async () => {
    console.log(`Bot Logged As: ${client.user.tag}`);

    const currentDirectory = path.dirname(__filename);
    const avatarPath = path.join(currentDirectory, '609_1000.gif');

    try {
        const avatar = fs.readFileSync(avatarPath);
        await client.user.setAvatar(avatar);
        console.log('Animated avatar uploaded successfully!');
    } catch (error) {
        console.error('Failed to upload animated avatar:', error);
    }
});

   
process.on('beforeExit', (code) => {
  console.log(`\`\`\`js\n${code}\`\`\``)
});

process.on('exit', (code) => {
  console.log(`\`\`\`js\n${code}\`\`\``)
});

process.on("unhandledRejection", (reason, promise) => {
  console.log(`\`\`\`js\n${reason.stack}\`\`\``)
});

process.on("uncaughtException", (err) => {
  console.log(`\`\`\`js\n${err.stack}\`\`\``)
});


process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(`\`\`\`js\n${err.stack}\`\`\``);
});

module.exports = client; 
