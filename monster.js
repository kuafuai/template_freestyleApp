// Monster class definition and behavior
class Monster {
    constructor(wave) {
        if (!Number.isInteger(wave) || wave <= 0) {
            throw new Error("Wave must be a positive integer.");
        }
        this.health = this.calculateHealth(wave);
        this.speed = this.calculateSpeed();
    }

    calculateHealth(wave) {
        const baseHealth = 100; // Example base health
        const healthMultiplier = 20; // Health increase per wave
        return baseHealth + (healthMultiplier * (wave - 1)); // Health increases with each wave
    }

    calculateSpeed() {
        return 2; // Example constant speed for all monsters
    }

    move(basePosition) {
        // Logic to move the monster towards the base
        if (!basePosition || !Array.isArray(basePosition) || basePosition.length !== 2) {
            throw new Error("Invalid base position. It should be an array with two elements.");
        }
        const [baseX, baseY] = basePosition;

        // Placeholder logic for monster's current position
        let monsterPosition = [0, 0]; // Example starting position

        // Simple movement towards the base
        if (monsterPosition[0] < baseX) {
            monsterPosition[0] += this.speed;
        } else if (monsterPosition[0] > baseX) {
            monsterPosition[0] -= this.speed;
        }

        if (monsterPosition[1] < baseY) {
            monsterPosition[1] += this.speed;
        } else if (monsterPosition[1] > baseY) {
            monsterPosition[1] -= this.speed;
        }

        console.log(`Monster moved to position: ${monsterPosition}`);
    }
}
