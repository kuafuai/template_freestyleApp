```python
from enemy import Enemy

class Goblin(Enemy):
    def __init__(self):
        super().__init__(health=50, attack=10, defense=5)

    def special_attack(self):
        # Implement the special attack behavior for Goblin
        self.attack *= 2
        print("Goblin uses special attack!")
        print(f"Attack power increased to {self.attack}!")