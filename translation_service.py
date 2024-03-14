# Import required modules
import translation_api

# Detect language
def get_detected_language(text):
    try:
        detected_language = translation_api.detect_language(text)
        return detected_language
    except Exception as e:
        print(f"Error detecting language: {e}")
        return None

# Translate text
def perform_translation(text, source_language, target_language):
    try:
        translated_text = translation_api.translate_text(text, source_language, target_language)
        return translated_text
    except Exception as e:
        print(f"Error translating text: {e}")
        return None
