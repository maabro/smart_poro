/**
 * main.js
 * @author maabro
*/
require('dotenv').config();
const fs = require('fs');
const { prefix } = require('./config.json');
const Discord = require('discord.js');

const { Champion } = require('./classes/Champion');

const json = require('./data/en/championFull.json');
var champions = [];

const client = new Discord.Client();

/*const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
    
}*/

client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of files) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    for (i in json['data']) {
        let c = Object.create(Champion.prototype);
        c.setId(json['data'][i].id);
        c.setName(json['data'][i].name);
        c.setTitle(json['data'][i].title);
        c.setStat(json['data'][i].stats);
        champions.push(c);
    }
    console.log(`Smart Poro esta encendido`);
    console.log(`Load ${champions.length} champions`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.args && !args.length) {
        let reply = `No has escrito ningun atributo, ${message.author}!`;

        if (command.usage) {
            reply += `\nManera correcta es: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount); // revisar

    try {
        command.execute(message, args, champions);
    } catch (error) {
        console.error(error);
        message.reply('Error al ejecutar el comando!');
    }
  
});

client.login(process.env.TOKEN);