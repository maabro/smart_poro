/**
 * Exporta el comando "item"
 * commands/item.js
 * @author maabro
*/
module.exports = {
    name: 'item',
    description: 'Search an item.',
    args: true,
    usage: '<item-name>',
    execute(message, args) {
        if (args[0] === 'potion') {
            message.channel.send(`Las pociones`);
        }
        message.channel.send(`Objeto: ${args[0]}`);
    }
};