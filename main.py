import chat
import user
import group
import file_transfer
import encryption

def main():
    """
    This is the main function that serves as the entry point for the chat room application.
    It initializes the chat room application, creates instances of other modules, and starts the chat room application.
    """
    # Initialize the chat room application
    chat_app = chat.ChatApp()

    # Create instances of other modules
    user_manager = user.UserManager()
    group_manager = group.GroupManager()
    file_transfer_manager = file_transfer.FileTransferManager()
    encryption_manager = encryption.EncryptionManager()

    # Start the chat room application
    chat_app.start(user_manager, group_manager, file_transfer_manager, encryption_manager)

if __name__ == "__main__":
    main()