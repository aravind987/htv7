import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.132.2-dLPTyDAYt6rc6aB18fLm/mode=imports/optimized/three.js';
/*import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';



import * as THREE from './three/build/three.module.js'
*/

import { TextGeometry } from './three/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from './three/examples/jsm/loaders/FontLoader.js'
import { OrbitControls } from './three/examples/jsm/controls/OrbitControls.js'
import { RelationshipCircle } from './relationshipCircle.js'
import { RelationshipBox } from './relationshipBox.js'
import { TextGenerate } from './textGenerate.js'
import { displayInformation, closeInformation} from './informationBox.js'


const scene = new THREE.Scene();



//Sets up some stats
const ORIGINRADIUS = 20;
const SEGMENTS = 32;
const RADIUS = 13;
const DISTANCESCALE = 4;
const SEPARATIONSCALE = 6;

//RED, YELLOW, GREEN, SKY, BLUE, PURPLE, PINK
const RED = 0xff0000
const YELLOW = 0xF7FF00
const GREEN = 0x17FF00
const SKY = 0x00FFD4
const BLUE = 0x006CFF
const PURPLE = 0xB200FF
const PINK = 0xFF0083
const BLACK = 0x000000
const COLOR = [0xff0000, 0xF7FF00, 0x17FF00, 0x00FFD4, 0x006CFF,0xB200FF, 0xFF0083 ]

var GenshinFont = './static/GenshinImpact.json'

//Initializing Camera, Scene, Controls, and Renderer
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    alpha: true
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(100);

renderer.render (scene, camera);

//Modifying controls for 2D
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableRotate = false;
controls.mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.ROTATE
}

//Raycaster for on-click
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove( event ) {
	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

var infoBox

function render( event ) {
	raycaster.setFromCamera( pointer, camera )
	const intersects = raycaster.intersectObjects( scene.children )

	for ( let i = 0; i < intersects.length; i ++ ) {
	    var rayObject = intersects[i].object;
	    if(rayObject.name != "My Name" && rayObject.name != "Deletable" && camera.position.z <= 300) {

	            var width = rayObject.geometry.parameters.radius * 3;
	            var height = width * 2;
                /*
                var vector = new THREE.Vector3(pointer.x, pointer.y, 0.5);
                vector.unproject( camera );
                var dir = vector.sub( camera.position ).normalize();
                var distance = - camera.position.z / dir.z;
                var pos = camera.position.clone().add( dir.multiplyScalar( distance ) );

	            var xPosition = pos.x + width/2
	            var yPosition = pos.y - height/2

                //If infoBox already exists, replaces
                if(infoBox != null)
                    scene.remove(infoBox.boxForm)

	            infoBox = new RelationshipBox(width, height, xPosition, yPosition, uncategorizedRelationshipData[rayObject.name], rayObject.material.color, scene)
	            scene.add(infoBox.boxForm)*/
                displayInformation(uncategorizedRelationshipData[rayObject.name]);


        }

    }

    //If clicked outside of box
    if(intersects.length == 0) {
        /*
        if(infoBox != null) {
            scene.remove(infoBox.boxForm)
            infoBox = null
        }
        */
        closeInformation()
    }

	renderer.render(scene, camera)

}

//Removes boxes when zoomed out
function removeWhenFar() {
    if(camera.position.z > 300 && infoBox != null) {
        scene.remove(infoBox.boxForm)
        infoBox = null
    }
}

window.addEventListener("click", render);
window.addEventListener( 'pointermove', onPointerMove );

function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

function initializePersonalCircle() {
    var personalGeometry = new THREE.CircleGeometry(ORIGINRADIUS, SEGMENTS)
    var personalMaterial = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: false});
    var circle = new THREE.Mesh(personalGeometry, personalMaterial);
    circle.name = "My Name";
    scene.add(circle);

    //text, size, fontJSON, textColor, scene, xPosition, yPosition
    var personalName = new TextGenerate("YOU", 5, GenshinFont, BLACK, scene, 0, 0)
}

function circleFormationGenerate(data, originX, originY) {
    var totalPeople = Object.keys(uncategorizedRelationshipData).length;
    var distance = ORIGINRADIUS * DISTANCESCALE
    var maxPerRing = Math.floor(2*Math.PI*distance / (RADIUS*SEPARATIONSCALE))
    var angleIncrease = (2*Math.PI / maxPerRing)
    var currentCount = 0;

    var last = false;
    for(let i = 0; i < totalPeople; i++) {
        //Find people per ring (Circumference / Space per Person)
        if(currentCount >= maxPerRing) {
            maxPerRing = Math.floor(2*Math.PI*distance / (RADIUS*SEPARATIONSCALE))

            angleIncrease = (2*Math.PI / maxPerRing)
            currentCount = 0;
            distance += ORIGINRADIUS * DISTANCESCALE;
            if(totalPeople-i < maxPerRing && !last) {
                angleIncrease = 2*Math.PI / (totalPeople - i)
                last = true
            }
        }


        var xPosition = Math.cos(angleIncrease*currentCount) * distance + originX
        var yPosition = Math.sin(angleIncrease*currentCount) * distance + originY

        //Radius, color, jsonData, fontJSON, scene, xPosition, yPosition
        var personCircle = new RelationshipCircle(RADIUS, COLOR[getRandomInt(7)], data[Object.keys(data)[i]], GenshinFont, scene, xPosition, yPosition)
        var personName = new TextGenerate(data[Object.keys(data)[i]]["firstName"]+data[Object.keys(data)[i]]["lastName"], 5, GenshinFont, BLACK, scene, xPosition, yPosition)
        currentCount++
    }
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    removeWhenFar();
}



//Retrieve relationship data from json
const res = await fetch("http://localhost:5000/networkData")
var uncategorizedRelationshipData = await res.json()


circleFormationGenerate(uncategorizedRelationshipData, 0, 0)

initializePersonalCircle()

animate();

