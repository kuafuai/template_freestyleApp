# scanner.py

import os

class Scanner:
    def __init__(self):
        self.disk_or_folder_path = ""
        self.file_formats = []
        self.file_list = []

    def set_disk_or_folder_path(self, path):
        if os.path.exists(path):
            self.disk_or_folder_path = path
        else:
            raise ValueError("Invalid path provided.")

    def set_file_formats(self, formats):
        if isinstance(formats, list) and all(isinstance(format, str) for format in formats):
            self.file_formats = formats
        else:
            raise ValueError("Invalid file formats provided.")

    def validate_file_formats(self):
        if not self.file_formats:
            raise ValueError("No file formats provided.")
        for format in self.file_formats:
            if not isinstance(format, str):
                raise ValueError("Invalid file format provided.")

    def scan_files(self):
        self.file_list = []
        self.validate_file_formats()
        for root, dirs, files in os.walk(self.disk_or_folder_path):
            for file in files:
                file_path = os.path.join(root, file)
                file_extension = os.path.splitext(file_path)[1][1:]
                if file_extension in self.file_formats:
                    self.file_list.append(file_path)

    def get_file_list(self):
        return self.file_list
