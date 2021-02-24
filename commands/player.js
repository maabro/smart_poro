const { DiscordAPIError } = require("discord.js");

/**
 * Exporta el comando "player"
 * commands/player.js
 * @author maabro
*/
module.exports = {
    name: 'player',
    description: 'Search a player.',
    args: true,
    usage: '<EU> <summoner>',
    execute(message, args) {
        if (args[1] === 'kazalla') {
            message.channel.send(`Region: ${args[0]}\nInvocador: ${args[1]}`);
        }
        
        message.channel.send(`Arguments: ${args}`);
    }
};