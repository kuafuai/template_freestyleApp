class User:
    def __init__(self, gender: str, age: int, zodiac_sign: str, personality_traits: list, relationship: str, purpose: str, price_range: tuple):
        """
        Initialize the user object with gender, age, zodiac sign, personality traits, relationship, purpose, and price range.

        Args:
        - gender (str): The gender of the user.
        - age (int): The age of the user.
        - zodiac_sign (str): The zodiac sign of the user.
        - personality_traits (list): The list of personality traits of the user.
        - relationship (str): The relationship status of the user.
        - purpose (str): The purpose of the user.
        - price_range (tuple): The price range of the user.

        Returns:
        - None
        """
        self.gender = gender
        self.age = age
        self.zodiac_sign = zodiac_sign
        self.personality_traits = personality_traits
        self.relationship = relationship
        self.purpose = purpose
        self.price_range = price_range

    def get_gender(self) -> str:
        """
        Get the gender of the user.

        Returns:
        - str: The gender of the user.
        """
        return self.gender

    def get_age(self) -> int:
        """
        Get the age of the user.

        Returns:
        - int: The age of the user.
        """
        return self.age

    def get_zodiac_sign(self) -> str:
        """
        Get the zodiac sign of the user.

        Returns:
        - str: The zodiac sign of the user.
        """
        return self.zodiac_sign

    def get_personality_traits(self) -> list:
        """
        Get the personality traits of the user.

        Returns:
        - list: The list of personality traits of the user.
        """
        return self.personality_traits

    def get_relationship(self) -> str:
        """
        Get the relationship status of the user.

        Returns:
        - str: The relationship status of the user.
        """
        return self.relationship

    def get_purpose(self) -> str:
        """
        Get the purpose of the user.

        Returns:
        - str: The purpose of the user.
        """
        return self.purpose

    def get_price_range(self) -> tuple:
        """
        Get the price range of the user.

        Returns:
        - tuple: The price range of the user.
        """
        return self.price_range
