# history.py

class History:
    def __init__(self):
        self.records = []

    def add_record(self, record):
        self.records.append(record)

    def get_records(self):
        return self.records
