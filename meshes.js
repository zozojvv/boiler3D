import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()
export const addBoilerPlateMesh = () => {
    const box = new THREE.SphereGeometry(1, 32, 32);
    const colorMap = textureLoader.load('/Lava_002_COLOR.png');
    const displacementMap = textureLoader.load('/Lava_002_DISP.png');
    const normalMap = textureLoader.load('/Lava_002_NRM.png');
    const aoMap = textureLoader.load('path/Lava_002_OCC.png');
    const roughnessMap = textureLoader.load('/Lava_002_SPEC.png');
    const material = new THREE.MeshStandardMaterial({
        map: colorMap,
        displacementMap: displacementMap,
        displacementScale: 0.1, 
        normalMap: normalMap,
        aoMap: aoMap,
        roughnessMap: roughnessMap,
        metalness: 0
    });    const boxMesh = new THREE.Mesh(box, material);
    boxMesh.position.set(0,0,0);
    return boxMesh;
}

// function addBoilerPlateMesh () {

// }

export function addStandardMesh() {
    const colorMap = textureLoader.load('/Abstract_001_COLOR.jpg');
    const displacementMap = textureLoader.load('/Abstract_001_DISP.png');
    const normalMap = textureLoader.load('/Abstract_001_NRM.jpg');
    const aoMap = textureLoader.load('/Abstract_001_OCC.jpg');
    const roughnessMap = textureLoader.load('/Abstract_001_SPEC.jpg');

    const box = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({
        map: colorMap,
        displacementMap: displacementMap,
        displacementScale: 0.1, 
        normalMap: normalMap,
        aoMap: aoMap,
        roughnessMap: roughnessMap,
        metalness: 0, 
    });
    const boxMesh = new THREE.Mesh(box, material);
    boxMesh.position.set(-4,0,7); 
    return boxMesh;
}

export function addBoxMesh() {
    const map = textureLoader.load('/surface_basecolor.jpg');
    const aoMap = textureLoader.load('/surface_ambient.jpg');
    const normalMap = textureLoader.load('/surface_normal.jpg');
    const roughnessMap = textureLoader.load('/surface_roughness.jpg');
    const displacementMap = textureLoader.load('/surface_height.png');

    const geometry = new THREE.SphereGeometry(0.5, 32, 32); 
    const material = new THREE.MeshStandardMaterial({
        map: map,
        aoMap: aoMap,
        normalMap: normalMap,
        roughnessMap: roughnessMap,
        displacementMap: displacementMap,
        displacementScale: 0.1 
    });
    const boxMesh = new THREE.Mesh( geometry, material ); 
    boxMesh.position.set(-5,0,1);
    return boxMesh;
}

export function addPolyHedron() {
    const color = textureLoader.load('/water_color.jpg')
    const displace = textureLoader.load('/water_displacement.png')
    const ambient = textureLoader.load('/water_ambient.jpg')
    const normal = textureLoader.load('/water_normal.jpg')
    const roughnessMap = textureLoader.load('/water_roughness.jpg')
    const geometry = new THREE.SphereGeometry(0.3, 32, 32);
    const material = new THREE.MeshPhysicalMaterial( {
        map: color, 
        displacementMap: displace, 
        displacementScale: 0.3,
        aoMap: ambient, 
        normalMap: normal, 
        roughnessMap: roughnessMap, 
        roughness: 0.5, 
        metalness: 1,
        transmission: 1.0, 
        ior: 2.33,
        thickness: 0.5
    } ); 
    geometry.setAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2));
    const boxMesh = new THREE.Mesh( geometry, material ); 
    boxMesh.position.set(2,0,-2) 

    return boxMesh;
}


export function addPlanet() {
    const colorMap = textureLoader.load('/Abstract_001_COLOR.jpg');
    const displacementMap = textureLoader.load('/Abstract_001_DISP.png');
    const normalMap = textureLoader.load('/Abstract_001_NRM.jpg');
    const aoMap = textureLoader.load('/Abstract_001_OCC.jpg');
    const roughnessMap = textureLoader.load('/Abstract_001_SPEC.jpg');

    const box = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({
        map: colorMap,
        displacementMap: displacementMap,
        displacementScale: 0.1, 
        normalMap: normalMap,
        aoMap: aoMap,
        roughnessMap: roughnessMap,
        metalness: 0, 
    });
    const boxMesh = new THREE.Mesh(box, material);
    boxMesh.position.set(-4,0,-4); 
    return boxMesh;
}