import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';

//Initializing Camera, Scene, Controls, and Renderer
var circleColors = [0xD5806E, 0xCDD56E, 0x6ED585]
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );

const ORIGINRADIUS = 20;
const SEGMENTS = 32;

const RADIUS = 13;


let relationshipsShape = [];

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    alpha: true
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render (scene, camera);

const geometry = new THREE.CircleGeometry(RADIUS, SEGMENTS);


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
console.log(relationshipData)

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


function initializeRelationships() {
    var distanceScale = 5;


    var ringCount = 2;
    var dictionarySize = 100;
    var remainingCircles = dictionarySize;

    var distance = ORIGINRADIUS * distanceScale

    var circumference = distance * 2 * Math.PI;

    var numberOfCircles = circumference/(RADIUS*8)
    var currentCount = 0;

    var angleIncrease = 2*Math.PI/numberOfCircles

    if(remainingCircles < numberOfCircles) {
            numberOfCircles = circumference / remainingCircles

            angleIncrease = 2*Math.PI/remainingCircles
    }

    var angle = 0;
    var color = circleColors[0]
    for(let i = 0; i < dictionarySize; i++) {

        if(currentCount >= numberOfCircles) {
            distance = ORIGINRADIUS * distanceScale * ringCount++;
            circumference = distance * 2 * Math.PI;
            numberOfCircles = circumference/(RADIUS*8)
            currentCount = 0;
            angleIncrease = 2*Math.PI/numberOfCircles

            if(remainingCircles < numberOfCircles) {
                numberOfCircles = circumference / remainingCircles
                color = circleColors[1]
                angleIncrease = 2*Math.PI/remainingCircles
                console.log("True")
            }

        }


        var xPosition = distance * Math.cos(angle)
        var yPosition = distance * Math.sin(angle)

        angle = angle + angleIncrease

        displayRelationshipCircle(relationshipData[i], i, xPosition, yPosition, color);

        currentCount++;
        remainingCircles--;

    }
}

initializeRelationships();

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
}

animate();
