# replacer.py

import os

class Replacer:
    def __init__(self):
        self.search_text = ""
        self.replace_text = ""

    def set_search_text(self, text):
        if not isinstance(text, str):
            raise ValueError("Search text must be a string.")
        self.search_text = text

    def set_replace_text(self, text):
        if not isinstance(text, str):
            raise ValueError("Replace text must be a string.")
        self.replace_text = text

    def replace_text_in_files(self, file_list):
        if not isinstance(file_list, list):
            raise ValueError("File list must be a list.")
        
        total_files = len(file_list)
        processed_files = 0
        
        for file_path in file_list:
            if not os.path.isfile(file_path):
                print(f"File not found: {file_path}")
                continue
            
            try:
                with open(file_path, 'r') as file:
                    content = file.read()
                content = content.replace(self.search_text, self.replace_text)
                with open(file_path, 'w') as file:
                    file.write(content)
                processed_files += 1
                progress = processed_files / total_files * 100
                print(f"Progress: {progress}%")
            except Exception as e:
                print(f"Error processing file: {file_path}")
                print(f"Error message: {str(e)}")
        
        print("Replacement completed.")
