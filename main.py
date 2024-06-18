# This file is responsible for the main logic of the application.

import comment_generator
import file_parser
import comment_adder
import file_saver

def main():
    # Parse user input for C++ source code file path
    file_path = input("Enter the path of the C++ source code file: ")

    # Read the source code file
    source_code = file_parser.parse_file(file_path)

    # Extract comments from the source code
    comments = file_parser.extract_comments(source_code)

    # Generate new comments based on user-selected comment style and template
    new_comments = comment_generator.generate_comments(comments)

    # Add the new comments to the source code
    modified_code = comment_adder.add_comments(source_code, new_comments)

    # Save the modified code to the specified file path
    file_saver.save_file(file_path, modified_code)

if __name__ == "__main__":
    main()
