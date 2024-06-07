# timer.py

class Timer:
    def __init__(self):
        self.countdown_time = 0
        self.is_running = False

    def set_countdown_time(self, minutes):
        self.countdown_time = minutes * 60

    def get_countdown_time(self):
        return self.countdown_time

    def start(self):
        self.is_running = True

    def stop(self):
        self.is_running = False

    def is_finished(self):
        return self.countdown_time == 0

    def decrement_countdown_time(self):
        if self.is_running and self.countdown_time > 0:
            self.countdown_time -= 1

    def reset(self):
        self.countdown_time = 0
        self.is_running = False
