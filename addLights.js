import * as THREE from 'three'

export function addLight() {
    const group = new THREE.Group();

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2); 
    directionalLight.position.set(5, 0, 5);
    group.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x7898f8, 0.8); 
    group.add(ambientLight);

    return group;
}