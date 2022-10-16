import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.132.2-dLPTyDAYt6rc6aB18fLm/mode=imports/optimized/three.js';
/*import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';



import * as THREE from './three/build/three.module.js'
*/
import { OrbitControls } from './three/examples/jsm/controls/OrbitControls.js'


import { RelationshipCircle } from './relationshipCircle.js'
import { RelationshipBox } from './relationshipBox.js'


var circleColors = [0xD5806E, 0xCDD56E, 0x6ED585]
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );

var font = './static/three/examples/fonts/helvetiker_regular.typeface.json'

//Sets up some stats
const ORIGINRADIUS = 20;
const SEGMENTS = 32;
const RADIUS = 13;

//Array for all shapes
let relationshipsShape = [];

//Initializing Camera, Scene, Controls, and Renderer
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    alpha: true
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);

renderer.render (scene, camera);

//Modifying controls for 2D
const controls = new OrbitControls( camera, renderer.domElement );

controls.enableRotate = false;

controls.mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.ROTATE
}


//Retrieve relationship data from json
const res = await fetch("http://localhost:5000/networkData")
var relationshipData = await res.json()
console.log(relationshipData[Object.keys(relationshipData)[0]])

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
	    if(rayObject.name != "My Name" && rayObject.name != "Deletable" && camera.position.z <= 60) {
	        if(!rayObject.material.color.equals("rgb(255, 0, 0)")) {
	            rayObject.material.color.set("rgb(255, 0, 0)")

	            var width = rayObject.geometry.parameters.radius * 2;
	            var height = width * 3/2;

                var vector = new THREE.Vector3(pointer.x, pointer.y, 0.5);
                vector.unproject( camera );
                var dir = vector.sub( camera.position ).normalize();
                var distance = - camera.position.z / dir.z;
                var pos = camera.position.clone().add( dir.multiplyScalar( distance ) );

                console.log(pos)
	            var xPosition = pos.x + width/2
	            var yPosition = pos.y - height/2



                if(infoBox != null)
                    scene.remove(infoBox.boxForm)

	            infoBox = new RelationshipBox(width, height, xPosition, yPosition, relationshipData[rayObject.name])
	            scene.add(infoBox.boxForm)
	        }
            intersects[i].object.material.color.set( "rgb(255, 0, 0)" )
        }

    }

    if(intersects.length == 0) {
        if(infoBox != null) {
            scene.remove(infoBox.boxForm)
            infoBox = null
        }
    }


	renderer.render(scene, camera)

}

function removeWhenFar() {
    if(camera.position.z > 60 && infoBox != null) {
        scene.remove(infoBox.boxForm)
        infoBox = null
    }
}

window.addEventListener("click", render);
window.addEventListener( 'pointermove', onPointerMove );




var firstCircle = new RelationshipCircle(10, new THREE.Color(0x1342A3), relationshipData["John Doe"], font)

firstCircle.circleShape.position.x = -50
scene.add(firstCircle.circleShape)
scene.add(firstCircle.nameShape)

//Displays relationships as circles
function displayRelationshipCircle(name, index, xPosition, yPosition, acolor) {
    var material = new THREE.MeshBasicMaterial( { color: acolor, wireframe: false});
    //Creates circle
    var circle = new THREE.Mesh(geometry, material);
    circle.position.x = xPosition
    circle.position.y = yPosition
    circle.name = name;
    circle.color

    //Adds circle to array
    relationshipsShape[index] = circle;
    scene.add(circle)
}

function initializePersonalCircle() {

    var personalGeometry = new THREE.CircleGeometry(ORIGINRADIUS, SEGMENTS)
    var personalMaterial = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: false});
    var circle = new THREE.Mesh(personalGeometry, personalMaterial);

    circle.name = "My Name";

    scene.add(circle);
}

initializePersonalCircle()

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    removeWhenFar();
}

animate();

