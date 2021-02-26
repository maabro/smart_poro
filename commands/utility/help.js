/**
 * Exporta el comando "help"
 * commands/utility/help.js
 * @author maabro
*/
const { prefix } = require('../../config.json');
module.exports = {
    name: 'help',
    description: 'Command info',
    cooldown: 5,
    execute (message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Información sobre los comandos del poro:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nholita`);

            return message.author.send(data, { slipt: true})
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('El poro va de camino.');
                })
                .catch(e => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, e);
                    message.reply('El poro no ha podido llegar :(');
                });
        }

    }
}