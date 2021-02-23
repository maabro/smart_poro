/**
 * Exporta el comando "item"
 * commands/item.js
 * @author maabro
*/
module.exports = {
    name: 'item',
    description: 'Search an item.',
    args: true,
    execute(message, args) {
        message.channel.send(`Objeto: ${args[0]}`);
    }
};