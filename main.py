import game_interface
import game_logic
import settings
import help

def handle_click_event(event):
    if event == "start":
        game_logic.start_game()
    elif event == "difficulty":
        settings.select_difficulty()
    elif event == "save":
        game_logic.save_game()
    elif event == "load":
        game_logic.load_game()
    elif event == "history":
        game_logic.show_game_history()
    elif event == "undo":
        game_logic.undo_move()
    elif event == "restart":
        game_logic.restart_game()
    elif event == "quit":
        game_logic.quit_game()
    elif event == "settings":
        settings.open_settings()
    elif event == "help":
        help.show_game_rules()
    else:
        print("Invalid click event")

game_interface.create_game_interface()
game_interface.bind_click_event(handle_click_event)
game_interface.run_game_interface()