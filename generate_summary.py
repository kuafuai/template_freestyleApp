import os
import chatgpt
import logging

def generate_summary():
    try:
        # Code to read the book content from a file
        book_content = read_book_content()
        
        # Code to generate the book summary using chatgpt
        summary = chatgpt.generate_summary(book_content)
        
        # Code to save the book summary to a file
        save_summary(summary)
    except Exception as e:
        logging.error(f"An error occurred while generating the summary: {str(e)}")

def read_book_content():
    try:
        # Code to read the book content from a file
        with open('book.txt', 'r') as file:
            book_content = file.read()
        return book_content
    except FileNotFoundError:
        logging.error("The 'book.txt' file does not exist.")
        raise
    except Exception as e:
        logging.error(f"An error occurred while reading the book content: {str(e)}")
        raise

def save_summary(summary):
    try:
        # Code to save the book summary to a file
        with open('summary.txt', 'w') as file:
            file.write(summary)
    except Exception as e:
        logging.error(f"An error occurred while saving the summary: {str(e)}")
        raise

generate_summary()