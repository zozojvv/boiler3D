// to start the server: npm run dev

import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh, addStandardMesh } from './meshes'
import { addLight } from './addLights'

const scene = new THREE.Scene()
const render = new THREE.WebGLRenderer({antialias: true})
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100)
camera.position.set(0,0,5)

const meshes = {};

init()
function init(){
  render.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(render.domElement)

  // lights 
  meshes.defaultLight = addLight()
  // meshes.defaultLight = addLight()

  // meshes 
  meshes.default = addBoilerPlateMesh() 
  meshes.standard = addStandardMesh() 

  //scene operations
  scene.add(meshes.default)
  scene.add(meshes.standard)
  scene.add(meshes.defaultLight)

  resize()
  animate()
}

function resize() {
  window.addEventListener('resize', ()=> {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight 
    camera.updateProjectionMatrix() 
  })
}

function animate(){
  requestAnimationFrame(animate)

  // meshes.default.position.x += 0.01
  // meshes.default.position.y += 0.01

  meshes.default.rotation.x += 0.01
  meshes.standard.rotation.y += 0.01


  render.render(scene, camera)

}


