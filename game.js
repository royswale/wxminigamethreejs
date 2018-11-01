import './js/libs/weapp-adapter'
// import { canvas } from './js/libs/weapp-adapter';
// var THREE = require('./js/libs/three');
var THREE = require('./js/libs/three.min');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var context = canvas.getContext('webgl');
var renderer = new THREE.WebGLRenderer(context);

// https://stackoverflow.com/a/16177178
// Update #3
scene.background = new THREE.Color(0xffffff)

renderer.setSize(window.innerWidth, window.innerHeight);
canvas.appendChild(renderer.domElement);

var geometry = new THREE.CubeGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x0088ee });
var cube = new THREE.Mesh(geometry, material);

// edges
// https://codepen.io/jonathanphz/pen/WxEzPO
var edges = new THREE.EdgesHelper(cube, 0x000000);
edges.matrixAutoUpdate = true;
edges.material.linewidth = 2;
scene.add(edges);

scene.add(cube);

camera.position.z = 4;

function render() {
	requestAnimationFrame(render);
	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;

	// edges
	edges.rotation.x += 0.02;
	edges.rotation.y += 0.02;
	camera.updateProjectionMatrix();

	renderer.render(scene, camera);
}
render();