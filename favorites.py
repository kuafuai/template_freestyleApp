# This file contains the Favorites class and methods

from typing import List, Optional

class Favorites:
    def __init__(self):
        self.favorites: List[str] = []

    def add_to_favorites(self, gift: str) -> None:
        if gift not in self.favorites:
            self.favorites.append(gift)

    def remove_from_favorites(self, gift: str) -> None:
        if gift in self.favorites:
            self.favorites.remove(gift)

    def get_favorites(self) -> List[str]:
        return self.favorites
