import sqlite3

def save_schedule(schedule):
    try:
        conn = sqlite3.connect("schedule.db")
        cursor = conn.cursor()

        cursor.execute("INSERT INTO schedules (start_time, end_time, reminder_setting) VALUES (?, ?, ?)",
                       (schedule["start_time"], schedule["end_time"], schedule["reminder_setting"]))

        conn.commit()
    except sqlite3.Error as e:
        print("Error saving schedule:", e)
    finally:
        if conn:
            conn.close()

def get_all_schedules():
    try:
        conn = sqlite3.connect("schedule.db")
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM schedules")
        schedules = cursor.fetchall()

        return schedules
    except sqlite3.Error as e:
        print("Error retrieving schedules:", e)
    finally:
        if conn:
            conn.close()

def schedule_exists(schedule_id):
    try:
        conn = sqlite3.connect("schedule.db")
        cursor = conn.cursor()

        cursor.execute("SELECT COUNT(*) FROM schedules WHERE id = ?", (schedule_id,))
        count = cursor.fetchone()[0]

        return count > 0
    except sqlite3.Error as e:
        print("Error checking schedule existence:", e)
    finally:
        if conn:
            conn.close()

def update_schedule(schedule_id, start_time, end_time, reminder_setting):
    try:
        conn = sqlite3.connect("schedule.db")
        cursor = conn.cursor()

        cursor.execute("UPDATE schedules SET start_time = ?, end_time = ?, reminder_setting = ? WHERE id = ?",
                       (start_time, end_time, reminder_setting, schedule_id))

        conn.commit()
    except sqlite3.Error as e:
        print("Error updating schedule:", e)
    finally:
        if conn:
            conn.close()