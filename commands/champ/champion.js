/**
 * Exporta el comando "champion"
 * commands/champ/champion.js
 * @author maabro
*/
const Discord = require('discord.js');
const { Champion } = require('../../classes/Champion');

module.exports = {
    name: 'champion',
    aliases: ['champ'],
    cooldown: 5,
    description: 'Search a champion.',
    args: true,
    usage: '<champion-name>',
    execute(message, args, champions) {
        let champ = champions.filter((c) => {
            let id = c.id.toLowerCase();
            return (id === args[0]);
        });

        var ch = Object.create(Champion.prototype);
        ch.setId(champ[0].id);
        ch.setName(champ[0].name);
        ch.setTitle(champ[0].title);
        ch.setStat(champ[0].stat);
        console.log(ch);

        if (champ.length) {
            const championEmbed = new Discord.MessageEmbed()
                .setColor('#FFBF00')
                .setTitle(`${ch.name}`)
                .attachFiles([`./data/img/champion/${ch.id}.png`])
                .setDescription(`${ch.title}`)
                .setThumbnail(`attachment://${ch.id}.png`)       
                /*.addFields(
                    //{ name: '\u200B', value: '\u200B' },
                    { name: 'Q', value: `.`, inline: true },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                )
                .addField('Inline field title', 'Some value here', true)*/
                .addField('Stats', `${ch.getStats()}`)
                .addField('Skills',`${ch.getSkills()}`)
                .setTimestamp()
                .setFooter('your trusted bot', 'http://ddragon.leagueoflegends.com/cdn/11.4.1/img/profileicon/744.png');
            message.channel.send(championEmbed);
            console.log(`El campeon: ${args[0]}, existe!`);
        } else {
            message.channel.send(`El campeon: ${args[0]}, no existe!`);
            console.log("campeon no encontrado");
        }
    }
};