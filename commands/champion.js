/**
 * Exporta el comando "champion"
 * commands/champion.js
 * @author maabro
*/

const json = require('../data/en/championFull.json');
const Discord = require('discord.js');

module.exports = {
    name: 'champion',
    aliases: ['champ'],
    cooldown: 5,
    description: 'Search a champion.',
    args: true,
    usage: '<champion-name>',
    execute(message, args) {
        var champions = [];
        for (i in json['data']) {
            champions.push(json['data'][i]);
        }

        let champ = champions.filter((c) => {
            let id = c.id.toLowerCase();
            return (id === args[0]);
        });

        if (champ.length) {
            const championEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`${champ[0]['name']}`)
                .attachFiles([`./data/img/champion/${champ[0]['id']}.png`])
                .setDescription(`${champ[0]['title']}`)
                .setThumbnail(`attachment://${champ[0]['id']}.png`)
                .addField('Skills','**Q** - Nombre de la Q\n**W** - Nombre de la W\n**E** - Nombre de la E\n**R** - Nombre de la R')
                /*.addFields(
                    //{ name: '\u200B', value: '\u200B' },
                    { name: 'Q', value: `.`, inline: true },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                )
                .addField('Inline field title', 'Some value here', true)*/
                .addField('Stats', `\`\`\`Hp: ${champ[0]['stats']['hp']}\tArmor: ${champ[0]['stats']['armor']}\tAttack: ${champ[0]['stats']['attackdamage']}\nMp: ${champ[0]['stats']['mp']}\tMagic Res: ${champ[0]['stats']['spellblock']}\tSpeed: ${champ[0]['stats']['movespeed']}\`\`\``)
                .setTimestamp()
                .setFooter('your trusted bot', 'http://ddragon.leagueoflegends.com/cdn/11.4.1/img/profileicon/744.png');
            message.channel.send(championEmbed);
            console.log(`El campeon: ${args[0]}, existe!`);
        } else {
            message.channel.send(`El campeon: ${args[0]}, no existe!`);
            console.log("campeon no encontrado");
        }

        console.log(champ);

        /*for (const champ of champions) {
            if (args[0] === champ.id.toLowerCase()) {
                message.channel.send(`Has buscado a ${champ.name}`);
                console.log(`Has buscado a ${champ.name}`);
                break;
            } else {
                message.channel.send(`El campeon: ${args[0]}, no existe!`);
                break;
            }
        }*/

    }
};