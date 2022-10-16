import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import createBoxWithRoundedEdges from './roundedBoxGeometry.js'
import { TextGenerate } from './textGenerate.js'

export class RelationshipBox {
    constructor (width, height, xPosition, yPosition, jsonData, color, scene) {

    var fontName = './static/Horta_Regular.json'

    this.name = jsonData["firstName"] + " " + jsonData["lastName"]
    this.date = jsonData["date"]
    this.contactInfo = jsonData["contactInfo"]
    this.company = jsonData["company"]
    this.industry = jsonData["industry"]
    this.jobTitle = jsonData["jobTitle"]
    this.education = jsonData["education"]
    this.otherNotes = jsonData["otherNotes"]

    var geometryBox = createBoxWithRoundedEdges(width, height, 0, 1, 1)
    var materialBox = new THREE.MeshBasicMaterial({ color: color.clone().addScalar(-0.1), wireframe: false, transparent: true, opacity: 0.8})
    this.boxForm = new THREE.Mesh(geometryBox, materialBox)
    this.boxForm.position.x = xPosition
    this.boxForm.position.y = yPosition

    this.boxForm.name = "Deletable"

    //text, size, fontJSON, textColor, scene, xPosition, yPosition
    var nameText = new TextGenerate("Name: " + this.name, width/8, fontName, 0x000000, scene, xPosition, yPosition)


    var dateText = new TextGenerate("Date: " + this.name, width/8, fontName, 0x000000, scene, xPosition, yPosition)

    scene.add(nameText)

    var contactInfoText = new TextGenerate("Contact Info: " + this.name, width/8, fontName, 0x000000, scene, xPosition, yPosition)

    var companyText = new TextGenerate("Company: " + this.name, width/8, fontName, 0x000000, scene, xPosition, yPosition)
    var industryText = new TextGenerate("Industry: " + this.name, width/8, fontName, 0x000000, scene, xPosition, yPosition)

    var jobText = new TextGenerate("Job: " + this.name, width/8, fontName, 0x000000, scene, xPosition, yPosition)

    var educationText = new TextGenerate("Education: " + this.name, width/8, fontName, 0x000000, scene, xPosition, yPosition)

    var notesText = new TextGenerate("Notes: " + this.name, width/8, fontName, 0x000000, scene, xPosition, yPosition)
    }

}