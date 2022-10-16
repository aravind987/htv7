import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import createBoxWithRoundedEdges from './roundedBoxGeometry.js'

export class RelationshipBox {
    constructor (width, height, xPosition, yPosition, jsonData) {
    this.name = jsonData["firstName"] + " " + jsonData["lastName"]
    this.date = jsonData["date"]
    this.contactInfo = jsonData["contactInfo"]
    this.connectionReason = jsonData["connectionReason"]
    this.company = jsonData["company"]
    this.industry = jsonData["industry"]
    this.jobTitle = jsonData["jobTitle"]
    this.education = jsonData["education"]
    this.otherNotes = jsonData["otherNotes"]

    var geometryBox = createBoxWithRoundedEdges(width, height, 0, 1, 1)
    var materialBox = new THREE.MeshBasicMaterial({ color: 0x558DFF, wireframe: false})

    this.boxForm = new THREE.Mesh(geometryBox, materialBox)
    this.boxForm.position.x = xPosition
    this.boxForm.position.y = yPosition

    this.boxForm.name = "Deletable"
    }

}