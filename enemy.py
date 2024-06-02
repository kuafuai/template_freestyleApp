class Enemy:
    def __init__(self, health, attack_power, defense):
        self.health = health
        self.attack_power = attack_power
        self.defense = defense

    def attack(self, target):
        # Implement the attack behavior
        target.defend(self.attack_power)

    def defend(self, damage):
        # Implement the defend behavior
        self.health -= max(0, damage - self.defense)

    def move(self):
        # Implement the move behavior
        pass