import os

# Function to upload and save file
def upload_file(file):
    try:
        # Get the file name and extension
        file_name, file_extension = os.path.splitext(file)

        # Open the file in read mode
        with open(file, 'r') as f:
            # Read the contents of the file
            file_contents = f.read()

        # Specify the location to save the file
        save_location = '/path/to/save/location/' + file_name + '_uploaded' + file_extension

        # Open a new file in write mode
        with open(save_location, 'w') as f:
            # Write the contents of the file to the new file
            f.write(file_contents)

        # Print a success message
        print('File uploaded and saved successfully.')

    except FileNotFoundError:
        print('File not found.')

    except PermissionError:
        print('Permission denied.')

    except Exception as e:
        print('An error occurred:', str(e))
