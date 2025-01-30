from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/benefits')
def benefits():
    return render_template('benefits.html')

@app.route('/challenges')
def challenges():
    return render_template('challenges.html')

@app.route('/recommendations')
def recommendations():
    return render_template('recommendations.html')

if __name__ == '__main__':
    app.run(debug=True)
