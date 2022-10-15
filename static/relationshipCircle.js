import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import { RoundedEdgedBox } from './roundedBoxGeometry.js'

class RelationshipCircle {
    constructor(radius, color. jsonData, interaction) {

        this.radius = radius
        this.color = color
        this.name = jsonData["firstName"] + " " + jsonData["lastName"]
        this.date = jsonData["date"]
        this.contactInfo = jsonData["contactInfo"]
        this.connectionReason = jsonData["connectionReason"]
        this.company = jsonData["company"]
        this.industry = jsonData["industry"]
        this.jobTitle = jsonData["jobTitle"]
        this.education = jsonData["education"]
        this.otherNotes = jsonData["otherNotes"]

        var geometryCircle = new THREE.CircleGeometry(radius, 32)
        var materialCircle = new THREE.MeshBasicMaterial({ color: color, wireframe: false})

        this.circleShape = new THREE.Mesh(geometryCircle, materialCircle)
        this.circleShape.name = this.name

        var geometryBox = RoundEdgedBox(10, 10, 2, 2, 32, 32, 4, 10)
        var materialBox = new THREE.MeshBasicMaterial({ color: 0x558DFF, wireframe: false})



        this.boxForm = new THREE.Mesh(geometryBox, materialBox)

        this.boxForm.visible = false
    }

    function enableBox() {
        this.boxForm.visible = true
    }

    function disableBox() {
        this.boxForm.visible = false
    }



}