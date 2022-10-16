import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';


export class RelationshipCircle {
    constructor(radius, color, jsonData) {

        this.radius = radius
        this.color = color
        this.name = jsonData["firstName"] + " " + jsonData["lastName"]


        var geometryCircle = new THREE.CircleGeometry(radius, 32)
        var materialCircle = new THREE.MeshBasicMaterial({ color: color, wireframe: false})

        this.circleShape = new THREE.Mesh(geometryCircle, materialCircle)
        this.circleShape.name = this.name
    }


}