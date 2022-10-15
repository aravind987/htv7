from relationshipList import relationshipList
from flask import Flask, render_template, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#home page
@app.route('/')
def homePage():
    return render_template('index.html', title="Home")

# show network page
# @app.route('/network')
# def networkPage():
#     print("Hi")
#     return render_template('network.html', title="Network")

@app.route('/network')
def networkPage():
    return render_template('network.html', title="Network")

@app.route('/networkData')
def networkData():
    file = open('./data/relationshipData.json');

    relationshipDict = (json.load(file))["relationships"];
    return jsonify(relationshipDict);

#database page
@app.route('/add-connection')
def addConnectionPage():
    return render_template('add-connection.html', title="Add Connection")

# # network page
# @app.route('/network')
# def networkPage():
#     return render_template('network.html', title="Network")

#database page
@app.route('/database')
def databasePage():
    return render_template('database.html', title="Database")

if __name__ == '__main__':
    app.run()

