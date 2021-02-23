/**
 * Exporta el comando "champion"
 * commands/champion.js
 * @author maabro
*/
module.exports = {
    name: 'champion',
    description: 'Search a champion.',
    args: true,
    execute(message, args) {
        message.channel.send(`Campeon: ${args[0]}`);
    }
};