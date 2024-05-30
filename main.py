# Import the necessary modules
import import_data
import generate_book
import export_book
import edit_book
import search_book
import generate_table_of_contents
import generate_summary

# Call the functions to perform the required tasks

# Import data from WeChat
import_data.import_wechat_data()

# Generate the book
generate_book.generate_book()

# Export the book
export_book.export_book()

# Edit the book
edit_book.edit_book()

# Search the book
search_book.search_book()

# Generate the table of contents
generate_table_of_contents.generate_table_of_contents()

# Generate the summary
generate_summary.generate_summary()
