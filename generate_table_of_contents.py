# Import the necessary modules
import os

def generate_table_of_contents(book_file='book.txt', toc_file='toc.txt'):
    try:
        # Code to read the book content from a file
        book_content = read_book_content(book_file)
        
        # Code to generate the table of contents
        table_of_contents = generate_toc(book_content)
        
        # Code to save the table of contents to a file
        save_toc(table_of_contents, toc_file)
        
        return True
    except Exception as e:
        return str(e)

def read_book_content(book_file):
    # Code to read the book content from a file
    with open(book_file, 'r') as file:
        book_content = file.read()
    return book_content

def generate_toc(book_content):
    # Code to generate the table of contents
    table_of_contents = []
    lines = book_content.split("\n")
    for line in lines:
        if line.startswith("Timestamp:"):
            timestamp = line.split(":")[1].strip()
            table_of_contents.append(f"Timestamp: {timestamp}")
        elif line.startswith("Content:"):
            content = line.split(":")[1].strip()
            table_of_contents.append(f"Content: {content}")
    return "\n".join(table_of_contents)

def save_toc(table_of_contents, toc_file):
    # Code to save the table of contents to a file
    with open(toc_file, 'w') as file:
        file.write(table_of_contents)
