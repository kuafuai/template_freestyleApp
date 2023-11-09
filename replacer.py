# replacer.py

import os

class Replacer:
    def __init__(self):
        self.search_text = ""
        self.replace_text = ""

    def set_search_text(self, text):
        self.search_text = text

    def set_replace_text(self, text):
        self.replace_text = text

    def replace_text_in_files(self, file_list):
        total_files = len(file_list)
        processed_files = 0
        for file_path in file_list:
            with open(file_path, 'r') as file:
                content = file.read()
            content = content.replace(self.search_text, self.replace_text)
            with open(file_path, 'w') as file:
                file.write(content)
            processed_files += 1
            progress = processed_files / total_files * 100
            print(f"Progress: {progress}%")
        print("Replacement completed.")
