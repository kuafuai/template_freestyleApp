import os

class FileTransferManager:
    def __init__(self):
        self.file_path = None
        self.image_path = None

    def send_image(self, image_path, recipient):
        self.image_path = image_path
        self._send_file(self.image_path, recipient)

    def send_file(self, file_path, recipient):
        self.file_path = file_path
        self._send_file(self.file_path, recipient)

    def _send_file(self, file_path, recipient):
        # Logic to send the file to the specified recipient
        if os.path.exists(file_path):
            # Code to send the file
            print(f"Sending file {file_path} to {recipient}")
        else:
            print(f"File {file_path} does not exist")
