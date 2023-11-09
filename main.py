# main.py

# Import dependencies
from scanner import Scanner
from replacer import Replacer
from gui import GUI

# Create a GUI application instance
gui = GUI()

# Initialize the scanner and replacer
scanner = Scanner()
replacer = Replacer()

# Associate the scanner and replacer with the GUI
gui.set_scanner(scanner)
gui.set_replacer(replacer)

# Start the GUI application
gui.start()
