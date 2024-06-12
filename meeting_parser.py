# meeting_parser.py

# Parse meeting record
def parse(meeting_record):
    parsed_record = {}

    # Logic to parse meeting record and store it in parsed_record dictionary
    try:
        # Split the meeting record by newline character to get individual lines
        lines = meeting_record.split('\n')

        # Iterate over each line and parse the data
        for line in lines:
            # Split the line by colon to separate the key and value
            key_value = line.split(':')

            # Check if the line is not empty and contains a key-value pair
            if len(key_value) == 2:
                key = key_value[0].strip()
                value = key_value[1].strip()

                # Store the key-value pair in the parsed_record dictionary
                parsed_record[key] = value

    except Exception as e:
        # Handle any potential errors during parsing
        print(f"Error occurred while parsing meeting record: {str(e)}")

    return parsed_record
