```python
from enemy import Enemy

class Orc(Enemy):
    def __init__(self):
        super().__init__(health=100, attack=20, defense=10)

    def special_attack(self):
        # Implement the special attack behavior for Orc
        self.attack *= 2
        self.defense /= 2
        print("Orc performs a special attack!")