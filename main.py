from operator import methodcaller
from xml.dom.pulldom import END_DOCUMENT
from relationshipList import relationshipList
from flask import Flask, render_template, jsonify, request, redirect
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#home page
@app.route('/')
def homePage():
    return render_template('index.html', title="Home")

#handle form
@app.route('/handleForm',methods=['POST'])
def handleForm():
    firstName = request.form['firstName']
    lastName = request.form['lastName']
    fullName = firstName + lastName
    date = request.form['dateMet']
    company = request.form['company']
    jobTitle = request.form['jobTitle']
    industry = request.form['industry']
    education = request.form['education']
    email = request.form['inputEmail']
    linkedin = request.form['linkedin']
    phoneNum = request.form['phoneNumber']
    otherNotes = request.form['otherNotes']

    file = open('./data/relationshipData.json')
    relationshipDict = (json.load(file))["relationships"]

    relationshipDict[fullName] = [firstName,lastName,date,[phoneNum,email],company,industry,jobTitle,education,otherNotes]
    file = open('./data/relationshipData.json',"w")
    file.write(json.dumps(relationshipDict)["relationships"])
    return redirect ('/')

# show network page
@app.route('/network')
def networkPage():
    return render_template('network.html', title="Network")

@app.route('/networkData')
def networkData():
    file = open('./data/relationshipData.json')

    relationshipDict = (json.load(file))["relationships"]
    return jsonify(relationshipDict);

#database page
@app.route('/add-connection')
def addConnectionPage():
    return render_template('add-connection.html', title="Add Connection")

#database page
@app.route('/database')
def databasePage():
    return render_template('database.html', title="Database")

if __name__ == '__main__':
    app.run()

