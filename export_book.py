import os
from docx import Document

def export_book(file_name, word_file_name, pdf_file_name):
    try:
        # Code to read the book content from a file
        book_content = read_book_content(file_name)
        
        # Code to export the book as a Word document
        export_as_word(book_content, word_file_name)
        
        # Code to export the book as a PDF document
        export_as_pdf(book_content, pdf_file_name)
        
        return "Book exported successfully."
    except FileNotFoundError:
        return "Error: File not found."
    except Exception as e:
        return "Error: " + str(e)

def read_book_content(file_name):
    # Code to read the book content from a file
    with open(file_name, 'r') as file:
        book_content = file.read()
    return book_content

def export_as_word(book_content, word_file_name):
    # Code to export the book as a Word document
    document = Document()
    document.add_paragraph(book_content)
    document.save(word_file_name)

def export_as_pdf(book_content, pdf_file_name):
    # Code to export the book as a PDF document
    document = Document()
    document.add_paragraph(book_content)
    document.save(pdf_file_name)