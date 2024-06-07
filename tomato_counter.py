# tomato_counter.py

class TomatoCounter:
    def __init__(self):
        self.tomato_count = 0

    def increment_tomato_count(self):
        self.tomato_count += 1

    def get_tomato_count(self):
        return self.tomato_count
