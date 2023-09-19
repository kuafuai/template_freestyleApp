class LevelSettings:
    def __init__(self):
        self.difficulty = None
        self.enemy_count = None
        
    def set_difficulty(self, difficulty):
        self.difficulty = difficulty
        
    def get_enemy_count(self):
        return self.enemy_count

# Example usage:
level = LevelSettings()
level.set_difficulty("hard")
level.enemy_count = 10
print(level.get_enemy_count())  # Output: 10