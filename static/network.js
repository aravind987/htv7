import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';
console.log("Test");
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );


const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    alpha: true
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render (scene, camera);

const geometry = new THREE.CircleGeometry(5, 32);
const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: false});
const circle = new THREE.Mesh(geometry, material);

scene.add(circle);

const controls = new OrbitControls( camera, renderer.domElement );

controls.enableRotate = false;

controls.mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.ROTATE
}


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
