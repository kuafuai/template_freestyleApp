from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/student_account')
def student_account():
    return render_template('student_account.html')

@app.route('/teacher_account')
def teacher_account():
    return render_template('teacher_account.html')

@app.route('/discussion_forum')
def discussion_forum():
    return render_template('discussion_forum.html')

@app.route('/online_meeting')
def online_meeting():
    return render_template('online_meeting.html')

if __name__ == '__main__':
    app.run(debug=True)
