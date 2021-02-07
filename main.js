const Discord = require('discord.js');
const env = require('./env.json');
const json = require('./data/champion.json');
const client = new Discord.Client();
const prefix = "!";

client.on('ready', () => {   
    console.log("Smart Poro esta encendido");
});

client.on('message', message => {
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
});


client.login(env.BT);