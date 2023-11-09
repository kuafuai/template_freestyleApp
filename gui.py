# gui.py

import tkinter as tk
from tkinter import filedialog

class GUI:
    def __init__(self):
        self.scanner = None
        self.replacer = None

        self.root = tk.Tk()
        self.root.title("File Scanner and Replacer")

        self.disk_or_folder_path = tk.StringVar()
        self.file_formats = []
        self.search_text = tk.StringVar()
        self.replace_text = tk.StringVar()

        self.file_listbox = tk.Listbox(self.root)
        self.progress_bar = tk.Progressbar(self.root, orient=tk.HORIZONTAL, length=200, mode='determinate')
        self.result_text = tk.Text(self.root, height=10, width=50)

        self.create_widgets()

    def set_scanner(self, scanner):
        self.scanner = scanner

    def set_replacer(self, replacer):
        self.replacer = replacer

    def create_widgets(self):
        # Disk or Folder Path
        path_label = tk.Label(self.root, text="Disk or Folder Path:")
        path_label.pack()
        path_entry = tk.Entry(self.root, textvariable=self.disk_or_folder_path)
        path_entry.pack()

        # File Formats
        formats_label = tk.Label(self.root, text="File Formats:")
        formats_label.pack()
        formats_frame = tk.Frame(self.root)
        formats_frame.pack()
        formats = ["doc", "docx", "xls", "xlsx", "txt", "cvs"]
        for format in formats:
            format_checkbox = tk.Checkbutton(formats_frame, text=format, variable=tk.BooleanVar())
            format_checkbox.pack()
            self.file_formats.append(format_checkbox)

        # Search Text
        search_label = tk.Label(self.root, text="Search Text:")
        search_label.pack()
        search_entry = tk.Entry(self.root, textvariable=self.search_text)
        search_entry.pack()

        # Replace Text
        replace_label = tk.Label(self.root, text="Replace Text:")
        replace_label.pack()
        replace_entry = tk.Entry(self.root, textvariable=self.replace_text)
        replace_entry.pack()

        # Scan Button
        scan_button = tk.Button(self.root, text="Scan", command=self.scan_files)
        scan_button.pack()

        # File List
        self.file_listbox.pack()

        # Replace Button
        replace_button = tk.Button(self.root, text="Replace", command=self.replace_text_in_files)
        replace_button.pack()

        # Progress Bar
        self.progress_bar.pack()

        # Result Text
        self.result_text.pack()

    def scan_files(self):
        self.scanner.set_disk_or_folder_path(self.disk_or_folder_path.get())
        self.scanner.set_file_formats([format.cget("text") for format in self.file_formats if format.get()])
        self.scanner.scan_files()
        file_list = self.scanner.get_file_list()
        self.file_listbox.delete(0, tk.END)
        for file_path in file_list:
            self.file_listbox.insert(tk.END, file_path)

    def replace_text_in_files(self):
        self.replacer.set_search_text(self.search_text.get())
        self.replacer.set_replace_text(self.replace_text.get())
        file_list = [self.file_listbox.get(i) for i in range(self.file_listbox.size())]
        self.replacer.replace_text_in_files(file_list)

    def start(self):
        self.root.mainloop()
