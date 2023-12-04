class GroupManager:
    def __init__(self):
        self.contacts = []
        self.groups = {}

    def add_contact(self, contact):
        self.contacts.append(contact)

    def create_group(self, group_name):
        if group_name not in self.groups:
            self.groups[group_name] = []

    def join_group(self, group_name):
        if group_name in self.groups:
            self.groups[group_name].append(group_name)
