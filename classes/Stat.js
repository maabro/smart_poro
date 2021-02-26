/**
 * Class stat champion
 * @constructor
 * @param {double} hp, 
 * @param {double} hpperlevel, 
 * @param {double} mp, 
 * @param {double} mpperlevel, 
 * @param {double} movespeed, 
 * @param {double} armor, 
 * @param {double} armorperlevel, 
 * @param {double} spellblock, 
 * @param {double} spellblockperlevel, 
 * @param {double} attackrange, 
 * @param {double} hpregen, 
 * @param {double} hpregenperlevel,
 * @param {double} mpregen, 
 * @param {double} mpregenperlevel, 
 * @param {double} crit, 
 * @param {double} critperlevel, 
 * @param {double} attackdamage, 
 * @param {double} attackdamageperlevel, 
 * @param {double} attackspeedperlevel, 
 * @param {double} attackspeed
 * @author maabro
*/
class Stat {
    constructor(hp, hpperlevel, mp, mpperlevel, movespeed, armor, armorperlevel, spellblock, spellblockperlevel, attackrange, hpregen, hpregenperlevel, mpregen, mpregenperlevel, crit, critperlevel, attackdamage, attackdamageperlevel, attackspeedperlevel, attackspeed) {
        this.hp = hp;
        this.hpperlevel = hpperlevel;
        this.mp = mp;
        this.mpperlevel = mpperlevel;
        this.movespeed = movespeed;
        this.armor = armor;
        this.armorperlevel = armorperlevel;
        this.spellblock = spellblock;
        this.spellblockperlevel = spellblockperlevel;
        this.attackrange = attackrange;
        this.hpregen = hpregen;
        this.hpregenperlevel = hpregenperlevel;
        this.mpregen = mpregen;
        this.mpregenperlevel = mpregenperlevel;
        this.crit = crit;
        this.critperlevel = critperlevel;
        this.attackdamage = attackdamage;
        this.attackdamageperlevel = attackdamageperlevel;
        this.attackspeedperlevel = attackspeedperlevel;
        this.attackspeed = attackspeed;
    }

    getHp() {
        return hp;
    }

    getHpperlevel() {
        return hpperlevel;
    }

    getMp() {
        return mp;
    }

    getMpperlevel() {
        return mpperlevel;
    }

    getMovespeed() {
        return movespeed;
    }

    getArmor() {
        return armor;
    }

    getArmorperlevel() {
        return armorperlevel;
    }

    getSpellblock() {
        return spellblock;
    }

    getSpellblockperlevel() {
        return spellblockperlevel;
    }

    getAttackrange() {
        return attackrange;
    }

    getHpregen() {
        return hpregen;
    }

    getHpregenperlevel() {
        return hpregenperlevel;
    }

    getMpregen() {
        return mpregen;
    }

    getMpregenperlevel() {
        return mpregenperlevel;
    }

    getCrit() {
        return crit;
    }

    getCritperlevel() {
        return critperlevel;
    }

    getAttackdamage() {
        return attackdamage;
    }

    getAttackdamageperlevel() {
        return attackdamageperlevel;
    }

    getAttackspeedperlevel() {
        return attackspeedperlevel;
    }

    getAttackspeed() {
        return attackspeed;
    }
}
module.exports = { Stat };