import * as THREE from './three/build/three.module.js'

import { TextGeometry } from './three/examples/jsm/geometries/TextGeometry.js'

import { FontLoader } from './three/examples/jsm/loaders/FontLoader.js'

export class RelationshipCircle {
    constructor(radius, color, jsonData, fontJSON) {
        this.radius = radius
        this.color = color
        this.name = jsonData["firstName"] + " " + jsonData["lastName"]


        var geometryCircle = new THREE.CircleGeometry(radius, 32)
        var materialCircle = new THREE.MeshBasicMaterial({ color: color, wireframe: false})

        this.circleShape = new THREE.Mesh(geometryCircle, materialCircle)
        this.circleShape.name = this.name
        this.nameShape
        const loader = new FontLoader()
        var font = loader.load('./static/three/examples/fonts/helvetiker_regular.typeface.json');
        var fontOptions = {
            font: font,
            size: 40,
            height: 5
        }
        this.nameShape = new THREE.Mesh(new TextGeometry("Test", fontOptions), new THREE.MeshBasicMaterial( { color: 0x00ff00 } ))

        console.log(this.nameShape)

    }


}