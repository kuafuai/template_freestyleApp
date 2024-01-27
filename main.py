import user
import login
import frontend

def create_backend():
    user.import_module()
    user.register_user()
    user.modify_user_info()
    user.manage_user_permissions()

def create_frontend():
    login.import_module()
    frontend.import_module()
    frontend.create_password_login()
    frontend.create_email_login()

if __name__ == "__main__":
    create_backend()
    create_frontend()