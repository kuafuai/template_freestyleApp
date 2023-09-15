class GameLogic:
    def __init__(self):
        # Initialize the game logic
        self.game_interface = GameInterface()
        self.current_tetromino = Tetromino()

    def handle_logic(self):
        # Handle the game logic, including tetromino movement, collision detection, line clearing, and game over condition
        self.current_tetromino.move_down()
        if self.current_tetromino.check_collision():
            self.current_tetromino.move_up()
            self.game_interface.add_tetromino(self.current_tetromino)
            self.current_tetromino = Tetromino()
            self.game_interface.clear_lines()
            if self.game_interface.check_game_over():
                self.game_interface.game_over()

    def update_interface(self):
        # Update the game interface based on the current game state
        self.game_interface.update()

    def handle_input(self):
        # Handle user input for tetromino movement and rotation
        user_input = input("Enter a command: ")
        if user_input == "left":
            self.current_tetromino.move_left()
        elif user_input == "right":
            self.current_tetromino.move_right()
        elif user_input == "down":
            self.current_tetromino.move_down()
        elif user_input == "rotate":
            self.current_tetromino.rotate()

    def game_loop(self):
        # Handle the game loop, which continuously updates the game state and checks for game over condition
        while not self.game_interface.check_game_over():
            self.handle_input()
            self.handle_logic()
            self.update_interface()
