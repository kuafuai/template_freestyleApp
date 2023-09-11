import csv

# Function to write data to a CSV file
def write_to_csv(data, file_path):
    # Open the CSV file in write mode
    with open(file_path, "w", newline="", encoding="utf-8") as file:
        # Create a CSV writer object
        writer = csv.writer(file)
        
        # Write the data to the CSV file
        writer.writerows(data)
    
    print("Data written to", file_path)

# Main function to execute the CSV writing process
def main():
    # Example data to write to the CSV file
    data = [
        ["Name", "Age", "City"],
        ["John Doe", 25, "New York"],
        ["Jane Smith", 30, "London"],
        ["Bob Johnson", 35, "Paris"]
    ]
    
    # Specify the file path for the CSV file
    file_path = "data.csv"
    
    # Write data to the CSV file
    write_to_csv(data, file_path)

# Execute the main function
if __name__ == "__main__":
    main()
