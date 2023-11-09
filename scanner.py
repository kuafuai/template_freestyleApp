# scanner.py

import os

class Scanner:
    def __init__(self):
        self.disk_or_folder_path = ""
        self.file_formats = []
        self.file_list = []

    def set_disk_or_folder_path(self, path):
        self.disk_or_folder_path = path

    def set_file_formats(self, formats):
        self.file_formats = formats

    def scan_files(self):
        self.file_list = []
        for root, dirs, files in os.walk(self.disk_or_folder_path):
            for file in files:
                file_path = os.path.join(root, file)
                file_extension = os.path.splitext(file_path)[1][1:]
                if file_extension in self.file_formats:
                    self.file_list.append(file_path)

    def get_file_list(self):
        return self.file_list
