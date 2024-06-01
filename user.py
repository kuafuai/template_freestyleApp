import database

class UserRegistration:
    def __init__(self):
        self.user_info = {}

    def register(self, user_info):
        if self.validate_user_info(user_info):
            database.store_user_info(user_info)
        else:
            raise ValueError("Invalid user information")

    def login(self, user_info):
        if self.validate_user_info(user_info):
            if database.check_user_exists(user_info):
                print("User logged in successfully")
            else:
                raise ValueError("User does not exist")
        else:
            raise ValueError("Invalid user information")

    def validate_user_info(self, user_info):
        if user_info["name"] and user_info["phone"] and user_info["id"]:
            return True
        else:
            return False

user_registration = UserRegistration()
user_info = {
    "name": "John Doe",
    "phone": "1234567890",
    "id": "12345",
    "password": "password123"
}

user_registration.register(user_info)
user_registration.login(user_info)