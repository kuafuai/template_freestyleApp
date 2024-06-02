# Define the Enemy class
class Enemy:
    def __init__(self, health, attack, defense):
        self.health = health
        self.attack_power = attack
        self.defense_power = defense

    def attack(self, target):
        # Implement the attack behavior
        target.defend(self.attack_power)

    def defend(self, damage):
        # Implement the defend behavior
        self.health -= max(0, damage - self.defense_power)

    def move(self):
        # Implement the move behavior
        pass

# Define the Goblin class, which is a subclass of Enemy
class Goblin(Enemy):
    def __init__(self):
        super().__init__(health=50, attack=10, defense=5)

    def special_attack(self, target):
        # Implement the special attack behavior for Goblin
        target.defend(self.attack_power * 2)

# Define the Orc class, which is a subclass of Enemy
class Orc(Enemy):
    def __init__(self):
        super().__init__(health=100, attack=20, defense=10)

    def special_attack(self, target):
        # Implement the special attack behavior for Orc
        target.defend(self.attack_power * 3)

# Create instances of Goblin and Orc
goblin = Goblin()
orc = Orc()
