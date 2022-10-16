import * as THREE from './three/build/three.module.js'


export class RelationshipCircle {
    constructor(radius, color, jsonData, fontJSON, scene, xPosition, yPosition) {
        this.radius = radius
        this.color = color
        this.name = jsonData["firstName"] + " " + jsonData["lastName"]


        var geometryCircle = new THREE.CircleGeometry(radius, 32)
        var materialCircle = new THREE.MeshBasicMaterial({ color: color, wireframe: false})

        this.circleShape = new THREE.Mesh(geometryCircle, materialCircle)
        this.circleShape.name = this.name

        this.circleShape.position.x = xPosition
        this.circleShape.position.y = yPosition
        scene.add(this.circleShape)


    }


}