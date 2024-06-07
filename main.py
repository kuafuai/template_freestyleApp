# main.py

# Import required modules
from timer import Timer
from tomato_counter import TomatoCounter
from history import History
from interface import Interface

# Create instances of Timer, TomatoCounter, History, and Interface
timer = Timer()
tomato_counter = TomatoCounter()
history = History()
interface = Interface()

# Start the interface and display initial countdown time and tomato count
interface.start()
interface.display_countdown_time(timer.get_countdown_time())
interface.display_tomato_count(tomato_counter.get_tomato_count())

# Listen for start and stop button clicks on the interface
while True:
    if interface.is_start_button_clicked():
        # Start the timer
        timer.start()
    elif interface.is_stop_button_clicked():
        # Stop the timer
        timer.stop()

    # Check if the timer has finished counting down
    if timer.is_finished():
        # Increment the tomato count
        tomato_counter.increment_tomato_count()
        # Update the interface with the new tomato count
        interface.display_tomato_count(tomato_counter.get_tomato_count())
        # Reset the timer
        timer.reset()

    # Check if the history button is clicked
    if interface.is_history_button_clicked():
        # Get the history records
        records = history.get_records()
        # Display the history records on the interface
        interface.display_history(records)
