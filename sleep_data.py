# sleep_data.py

# Import required modules
import datetime

# SleepData class
class SleepData:
    def __init__(self, start_time, end_time, quality):
        self.start_time = start_time
        self.end_time = end_time
        self.quality = quality

    def analyze(self):
        start_time = datetime.datetime.strptime(self.start_time, "%Y-%m-%d %H:%M:%S")
        end_time = datetime.datetime.strptime(self.end_time, "%Y-%m-%d %H:%M:%S")
        duration = end_time - start_time
        deep_sleep = duration.total_seconds() * 0.6
        light_sleep = duration.total_seconds() * 0.4
        return deep_sleep, light_sleep
