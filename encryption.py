import hashlib
from cryptography.fernet import Fernet

class EncryptionManager:
    def __init__(self):
        self.key = None

    def generate_key(self):
        # Generate a random encryption key
        self.key = Fernet.generate_key()

    def encrypt_message(self, message):
        # Encrypt the given message using the encryption key
        if not self.key:
            raise ValueError("Encryption key is not set")
        cipher_suite = Fernet(self.key)
        encrypted_message = cipher_suite.encrypt(message.encode())
        return encrypted_message

    def decrypt_message(self, encrypted_message):
        # Decrypt the given encrypted message using the encryption key
        if not self.key:
            raise ValueError("Encryption key is not set")
        cipher_suite = Fernet(self.key)
        decrypted_message = cipher_suite.decrypt(encrypted_message.encode())
        return decrypted_message.decode()
