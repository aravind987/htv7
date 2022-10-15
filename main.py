from relationshipList import relationshipList
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
@app.route('/network')
def networkPage():
    return render_template('network.html', title="Network")

if __name__ == '__main__':
    app.run()

