class UserManager:
    def __init__(self):
        self.users = {}

    def register_user(self, username, password):
        if username in self.users:
            raise ValueError("Username already exists")
        self.users[username] = password

    def login_user(self, username, password):
        if username not in self.users or self.users[username] != password:
            raise ValueError("Invalid username or password")
        print("User logged in successfully")


# Example usage
user_manager = UserManager()
user_manager.register_user("john", "password123")
user_manager.login_user("john", "password123")
