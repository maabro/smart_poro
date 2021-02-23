/**
 * Exporta el comando "player"
 * commands/player.js
 * @author maabro
*/
module.exports = {
    name: 'player',
    description: 'Search a player.',
    args: true,
    execute(message, args) {
        message.channel.send(`Region: ${args[0]}\nInvocador: ${args[1]}`);
    }
};