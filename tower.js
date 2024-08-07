// Tower class definition and functionality
class Tower {
    constructor(type, level) {
        const validTypes = ['archer', 'cannon', 'magic'];
        if (!validTypes.includes(type)) {
            throw new Error('Invalid tower type');
        }
        if (level < 1) {
            throw new Error('Level must be at least 1');
        }

        this.type = type;
        this.level = level;
        this.attackPower = this.calculateAttackPower();
        this.baseCost = 100; // Base cost for upgrading
    }

    calculateAttackPower() {
        const powerByType = {
            archer: 5,
            cannon: 10,
            magic: 15
        };
        
        return powerByType[this.type] * this.level;
    }

    upgrade() {
        const upgradeCost = this.baseCost * this.level;
        
        // Logic for upgrading tower
        this.level += 1;
        this.attackPower = this.calculateAttackPower();
        
        return upgradeCost;
    }
}
