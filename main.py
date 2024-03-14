import translation_service
import user_interface
import database

try:
    # Create user interface
    user_interface.create_user_interface()

    # Get user input
    text = user_interface.get_user_input()
    source_language = user_interface.get_source_language()
    target_language = user_interface.get_target_language()

    # Validate user input
    if not text or not source_language or not target_language:
        raise ValueError("Invalid user input")

    # Detect language
    detected_language = translation_service.detect_language(text)

    # Display detected language
    user_interface.display_detected_language(detected_language)

    # Translate text
    translated_text = translation_service.translate_text(text, source_language, target_language)

    # Display translated text
    user_interface.display_translated_text(translated_text)

    # Save translation record
    database.save_translation_record(text, detected_language, translated_text)

    # Manage translation records
    database.manage_translation_records()

except Exception as e:
    print(f"An error occurred: {str(e)}")