/**
 * Class champion
 * @constructor
 * @param {string} id - champion id
 * @param {string} name - champion name
 * @param {string} title - champion title
 * @author maabro
*/
const { Stat } = require('./Stat');
class Champion {
    //skills = [];
    stat = new Stat();

    constructor (id, name, title, stat) {
        this.id = id;
        this.name = name;
        this.title = title;
        //this.skills;
        this.stat = stat;
    }

    setId (id) {
        this.id = id;
    }

    setName (name) {
        this.name = name;
    }

    setTitle (title) {
        this.title = title;
    }

    setStat (stat) {
        this.stat = stat;
    }

    getStats () {
        return `
        \`\`\`Hp: ${this.stat.hp}(+${this.stat.hpperlevel})\tMp: ${this.stat.mp}(+${this.stat.mpperlevel})\tAtt.: ${this.stat.attackdamage}(+${this.stat.attackdamageperlevel})\n\`\`\``;
    }
}

module.exports = {Champion};