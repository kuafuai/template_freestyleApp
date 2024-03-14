# Import required modules
import database_system

# Save translation record
def save_translation_record(text, detected_language, translated_text):
    """
    Saves the translation record to the database.

    Args:
        text (str): The original text to be translated.
        detected_language (str): The language detected for the original text.
        translated_text (str): The translated text.

    Returns:
        None
    """
    database_system.save_translation_record(text, detected_language, translated_text)

# Display translation records
def display_translation_records(translation_records):
    """
    Displays the translation records.

    Args:
        translation_records (list): A list of translation records.

    Returns:
        None
    """
    for record in translation_records:
        print(f"Text: {record['text']}")
        print(f"Detected Language: {record['detected_language']}")
        print(f"Translated Text: {record['translated_text']}")
        print()

# Delete translation record
def delete_translation_record(translation_records):
    """
    Deletes a translation record from the database.

    Args:
        translation_records (list): A list of translation records.

    Returns:
        None
    """
    record_id = input("Enter the ID of the translation record to delete: ")
    for record in translation_records:
        if record['id'] == record_id:
            database_system.delete_translation_record(record_id)
            print("Translation record deleted successfully.")
            return
    print("Translation record not found.")

# Manage translation records
def manage_translation_records():
    # Query translation records
    translation_records = database_system.query_translation_records()

    # Display translation records
    display_translation_records(translation_records)

    # Delete translation record
    delete_translation_record(translation_records)
