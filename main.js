// to start the server: npm run dev

import './style.css'
import * as THREE from 'three'
import { addPlanet, addBoilerPlateMesh, addBoxMesh, addPolyHedron, addStandardMesh } from './meshes'
import { addLight } from './addLights'

const scene = new THREE.Scene()
const render = new THREE.WebGLRenderer({antialias: true})
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100)
camera.position.set(0,0,5)

const meshes = {};
let tick = 0

init()
function init(){
  render.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(render.domElement)

  // lights 
  meshes.defaultLight = addLight()

  // meshes 
  meshes.default = addBoilerPlateMesh() 
  meshes.standard = addStandardMesh() 
  meshes.box = addBoxMesh() 
  meshes.polyhedron = addPolyHedron() 
  meshes.planet = addPlanet()
  // meshes.torus = addTorus() 

  //scene operations
  scene.add(meshes.default)
  scene.add(meshes.standard)
  scene.add(meshes.defaultLight)
  scene.add(meshes.box)
  scene.add(meshes.polyhedron)
  scene.add(meshes.planet)
  // scene.add(meshes.torus)

  resize()
  animate()
}

function resize() {
  window.addEventListener('resize', ()=> {
    render.setSize(window.innerWidth, window.innerHeight); 
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}

function animate(){
  requestAnimationFrame(animate)

  tick += 0.01

  meshes.standard.position.x = (Math.sin(tick * 0.9) * 1) * 4;
  meshes.standard.position.y = (Math.cos(tick * 0.9) * 1) * 4;
  meshes.standard.position.z = (Math.cos(tick)) * 1.5;
  meshes.box.position.x = (Math.sin(tick * 0.8) * 2.5) * 2;
  meshes.box.position.y = (Math.cos(tick * 0.8) * 2.5) * 1;
  meshes.box.position.z = (Math.cos(tick)) * 2;
  meshes.polyhedron.position.x = (Math.sin(tick) * 0.5) * 5;
  meshes.polyhedron.position.y = (Math.cos(tick) * 0.5) * 5;
  meshes.polyhedron.position.z = (Math.cos(tick)) * 1.5;
  meshes.planet.position.x = (Math.sin(tick) * 0.4) * -5;
  meshes.planet.position.y = (Math.cos(tick) * 0.4) * -5;
  meshes.planet.position.z = (Math.cos(tick)) * 1.5;

  meshes.default.rotation.x += 0.005;
  meshes.box.rotation.y += 0.005;
  meshes.polyhedron.rotation.x += 0.005;


  render.render(scene, camera)

}


