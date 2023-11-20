import video_extraction
import subtitle_extraction
import audio_to_text_conversion

def display_menu():
    print("1. Extract video links")
    print("2. Extract subtitles")
    print("3. Convert audio to text")
    print("4. Exit")

def handle_user_input():
    while True:
        display_menu()
        choice = input("Enter your choice: ")

        if choice == "1":
            video_extraction.extract_video_links()
        elif choice == "2":
            subtitle_extraction.extract_subtitles()
        elif choice == "3":
            audio_to_text_conversion.convert_audio_to_text()
        elif choice == "4":
            break
        else:
            print("Invalid choice. Please try again.")

def main():
    handle_user_input()

if __name__ == "__main__":
    main()