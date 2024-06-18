# language.py

# Language class
class Language:
    def __init__(self, language):
        self.language = language

    def get_text(self, key):
        if self.language == "en":
            return self.en_text[key]
        elif self.language == "zh":
            return self.zh_text[key]

    def set_language(self, language):
        self.language = language

    en_text = {
        "main_menu": "Main Menu",
        "menu_option_prompt": "Enter menu option: ",
        "sleep_data_form": "Sleep Data Form",
        "start_time_prompt": "Enter start time: ",
        "end_time_prompt": "Enter end time: ",
        "quality_prompt": "Enter sleep quality: ",
        "analyze_sleep_data": "Analyze Sleep Data",
        "sleep_data_analysis": "Sleep Data Analysis: Deep Sleep - {}, Light Sleep - {}",
        "alarm_form": "Alarm Form",
        "alarm_time_prompt": "Enter alarm time: ",
        "alarm_method_prompt": "Enter alarm method: ",
        "login_form": "Login Form",
        "username_prompt": "Enter username: ",
        "password_prompt": "Enter password: ",
        "login_success": "Login successful. Welcome, {}!",
        "login_failure": "Login failed. Invalid username or password.",
        "language_selection": "Language Selection",
        "language_prompt": "Enter language (en/zh): ",
        "sleep_data_history": "Sleep Data History",
        "invalid_option": "Invalid option. Please try again."
    }

    zh_text = {
        "main_menu": "主菜单",
        "menu_option_prompt": "请输入菜单选项：",
        "sleep_data_form": "睡眠数据表单",
        "start_time_prompt": "请输入开始时间：",
        "end_time_prompt": "请输入结束时间：",
        "quality_prompt": "请输入睡眠质量：",
        "analyze_sleep_data": "分析睡眠数据",
        "sleep_data_analysis": "睡眠数据分析：深度睡眠 - {}，浅度睡眠 - {}",
        "alarm_form": "闹钟表单",
        "alarm_time_prompt": "请输入闹钟时间：",
        "alarm_method_prompt": "请输入闹钟方式：",
        "login_form": "登录表单",
        "username_prompt": "请输入用户名：",
        "password_prompt": "请输入密码：",
        "login_success": "登录成功。欢迎，{}！",
        "login_failure": "登录失败。无效的用户名或密码。",
        "language_selection": "语言选择",
        "language_prompt": "请输入语言（en/zh）：",
        "sleep_data_history": "睡眠数据历史记录",
        "invalid_option": "无效的选项。请重试。"
    }
