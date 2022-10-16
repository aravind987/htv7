
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

                nameShape.geometry.computeBoundingBox();
                var centerX = (nameShape.geometry.boundingBox.max.x+nameShape.geometry.boundingBox.min.x)/2
                var centerY = (nameShape.geometry.boundingBox.max.y+nameShape.geometry.boundingBox.min.y)/2


                nameShape.translateX(-centerX)

                nameShape.translateY(-centerY)


                scene.add(nameShape)

            })
    }


}