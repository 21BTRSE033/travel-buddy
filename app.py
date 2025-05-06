from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/tours')
def tours():
    return render_template('tours.html')

@app.route('/gokarna')
def gokarna():
    return render_template('gokarna.html')

@app.route('/hampi')
def hampi():
    return render_template('hampi.html')

@app.route('/mysore')
def mysore():
    return render_template('mysore.html')

@app.route('/ramanagara')
def ramanagara():
    return render_template('ramanagara.html')

@app.route('/udupi')
def udupi():
    return render_template('udupi.html')

if __name__ == '__main__':
    app.run(debug=True)
