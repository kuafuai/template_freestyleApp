# This file contains the implementation of the TennisRacket class.

class TennisRacket:
    """
    The TennisRacket class represents a tennis racket and has attributes like name and description.
    """

    def __init__(self, name, description):
        """
        Constructor for the TennisRacket class.

        Args:
            name (str): The name of the tennis racket.
            description (str): The description of the tennis racket.
        """
        self.name = name
        self.description = description

def get_tennis_rackets():
    """
    Function to get the list of tennis rackets.

    Returns:
        list: A list of TennisRacket objects.
    """
    tennis_rackets = []

    racket1 = TennisRacket("Racket 1", "Description of Racket 1")
    racket2 = TennisRacket("Racket 2", "Description of Racket 2")
    racket3 = TennisRacket("Racket 3", "Description of Racket 3")

    tennis_rackets.append(racket1)
    tennis_rackets.append(racket2)
    tennis_rackets.append(racket3)

    return tennis_rackets

def get_racket_details(racket_name):
    """
    Function to get the details of a tennis racket.

    Args:
        racket_name (str): The name of the tennis racket.

    Returns:
        TennisRacket: The TennisRacket object with the given name and description.
    """
    racket = TennisRacket(racket_name, "Description of " + racket_name)

    return racket
