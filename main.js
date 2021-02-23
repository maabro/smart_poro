/**
 * main.js
 * @author maabro
*/
require('dotenv').config();
const fs = require('fs');
const { prefix } = require('./config.json');
const Discord = require('discord.js');
const json = require('./data/champion.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of files) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {   
    console.log("Smart Poro esta encendido");
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Error al ejecutar el comando!');
    }
  
});



/*client.on('message', message => {
    if(!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLocaleLowerCase();

    if(command === "champion") {
        const champions = json["data"];
        var name = args.toString();
        for (i in champions) {
            //console.log(champions[i]["id"].toLocaleLowerCase());
            if(!champions[i]["id"].toLocaleLowerCase().includes(name.toLowerCase())) {
                message.reply("Este campeon no existe");
                break;
            } else {
                const embed = new Discord.MessageEmbed()
                .setTitle(champions[i]["name"])
                .setColor(0xff0000)
                .setDescription(champions[i]["blurb"]);
                message.channel.send(embed);
            }
        } 
    } else if(command === "object") {
        const embed = new Discord.MessageEmbed()
        .setTitle(args)
        .setColor(0xff0000)
        .setDescription('Este es el objeto');
        message.channel.send(embed);
    } else {
        message.reply("Este comando no existe");
    }
});*/


client.login(process.env.TOKEN);