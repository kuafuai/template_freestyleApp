class ScoringSystem:
    def __init__(self):
        # Initialize the scoring system
        self.score = 0
        
    def increase_score(self, points):
        # Increase the player's score by the given points
        self.score += points
        
    def decrease_score(self, points):
        # Decrease the player's score by the given points
        self.score -= points
        
    def get_score(self):
        # Get the player's current score
        return self.score