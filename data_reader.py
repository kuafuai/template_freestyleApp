import os
import openpyxl

class DataReader:
    def __init__(self):
        pass

    def read_dc_folder(self, folder_path):
        try:
            # Read the dc folder and extract data
            # Assuming the necessary information is extracted from the files in the folder
            for file_name in os.listdir(folder_path):
                file_path = os.path.join(folder_path, file_name)
                with open(file_path, 'r') as file:
                    # Process the file data and extract necessary information
                    # ...

        except FileNotFoundError:
            print("Folder not found.")

    def read_mb_excel(self, file_path):
        try:
            # Read the mb excel file and extract data
            workbook = openpyxl.load_workbook(file_path)
            sheet = workbook.active

            # Assuming the necessary information is extracted from the excel sheet
            for row in sheet.iter_rows(min_row=2, values_only=True):
                # Process the row data and extract necessary information
                # ...

        except FileNotFoundError:
            print("Excel file not found.")

    def get_person_details(self, person_id):
        try:
            # Get the details of a person from the data
            # Assuming the necessary information is retrieved based on the person_id
            person_details = {}

            # Process the data and retrieve the person details
            # ...

            return person_details

        except KeyError:
            print("Person ID not found.")

if __name__ == "__main__":
    data_reader = DataReader()
    data_reader.read_dc_folder("dc_folder")
    data_reader.read_mb_excel("mb_excel.xlsx")