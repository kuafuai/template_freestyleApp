class Product:
    def __init__(self, name, description, specifications):
        self.name = name
        self.description = description
        self.specifications = specifications

    def get_description(self):
        return self.description

    def get_specifications(self):
        return self.specifications
