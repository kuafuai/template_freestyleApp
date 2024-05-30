# Import the necessary modules
import os

def search_book():
    # Code to read the book content from a file
    try:
        book_content = read_book_content()
    except FileNotFoundError:
        print("Error: The book file does not exist.")
        return
    
    # Code to search for specific content in the book
    search_query = input("Enter the search query: ")
    search_results = search_content(book_content, search_query)
    
    # Code to display the search results
    display_results(search_results)
    
def read_book_content():
    # Code to read the book content from a file
    try:
        with open('book.txt', 'r') as file:
            book_content = file.read()
        return book_content
    except IOError:
        raise FileNotFoundError

def search_content(book_content, search_query):
    # Code to search for specific content in the book
    search_results = []
    lines = book_content.split("\n")
    for line in lines:
        if search_query.lower() in line.lower():
            search_results.append(line)
    return search_results

def display_results(search_results):
    # Code to display the search results
    if len(search_results) > 0:
        print("Search results:")
        for result in search_results:
            print(result)
    else:
        print("No results found.")

search_book()
