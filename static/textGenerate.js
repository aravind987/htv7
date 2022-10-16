
import * as THREE from './three/build/three.module.js'

import { TextGeometry } from './three/examples/jsm/geometries/TextGeometry.js'

import { FontLoader } from './three/examples/jsm/loaders/FontLoader.js'

export class TextGenerate {
    constructor(text, size, fontJSON, textColor, scene, xPosition, yPosition) {
        const loader = new FontLoader()
        loader.load(fontJSON, function (font) {
                var fontOptions = {
                font: font,
                size: size,
                height: 0.2
                }

                var geometryText = new TextGeometry(text, fontOptions)
                var meshText = new THREE.MeshPhongMaterial( { color: textColor } )
                 var nameShape = new THREE.Mesh(geometryText, meshText)

                 nameShape.position.x = xPosition
                 nameShape.position.y = yPosition


                scene.add(nameShape)

            })
    }


}