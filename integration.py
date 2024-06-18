# integration.py

# Integration class
class Integration:
    def __init__(self, smartwatch, health_data):
        self.smartwatch = smartwatch
        self.health_data = health_data

    def integrate(self):
        sleep_data = self.smartwatch.get_sleep_data()
        self.health_data.save_sleep_data(sleep_data)
