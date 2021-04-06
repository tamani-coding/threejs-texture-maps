import *  as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// SCENE
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

// RENDERER
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.update();

// RESIZE HAMDLER
export function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

// INIT CAMERA
camera.position.z = 15;
camera.position.x = 3;
camera.position.y = 6;
camera.lookAt(0, 0, -20)

// INIT HEMISPHERE LIGHT
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// SCENE
scene.background = new THREE.Color(0xffffff);
const textureLoader = new THREE.TextureLoader();
const grassNormalMap = textureLoader.load("./grass_normal_map.png");

const blocksBaseColor = textureLoader.load("./blocks-basecolor.jpg");
const blocksNormalMap = textureLoader.load("./blocks-normal.jpg");
const blocksHeightMap = textureLoader.load("./blocks-height.jpg");
const blocksRoughness = textureLoader.load("./blocks-roughness.jpg");
const blocksAmbientOcclusion = textureLoader.load("./blocks-ambientocclusion.jpg");

// FLOOR
for (var i = -50; i <= 50; i += 5) {
    for (var j = -50; j <= 50; j += 5) {
        const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5, 1), new THREE.MeshPhongMaterial({ color: 0x0a7d15, normalMap: grassNormalMap }));
        plane.position.x = i;
        plane.position.z = j;
        plane.rotation.x = - Math.PI / 2
        scene.add(plane);
    }
}

const box1 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshStandardMaterial({ map: blocksBaseColor }))
box1.position.y = 3
box1.position.x = -8
scene.add(box1)

const box2 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshStandardMaterial({ map: blocksBaseColor, normalMap: blocksNormalMap }))
box2.position.y = 3
box2.position.x = -5.8
scene.add(box2)

const box3 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 512, 512), new THREE.MeshStandardMaterial({ map: blocksBaseColor, normalMap: blocksNormalMap, displacementMap: blocksHeightMap, displacementScale: 0.05 }))
box3.position.y = 3
box3.position.x = -3.6
scene.add(box3)

const box4 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 512, 512), new THREE.MeshStandardMaterial({ map: blocksBaseColor, normalMap: blocksNormalMap, displacementMap: blocksHeightMap, displacementScale: 0.05, roughnessMap: blocksRoughness, roughness: 0.5  }))
box4.position.y = 3
box4.position.x = -1.4
scene.add(box4)

const box5 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 512, 512), new THREE.MeshStandardMaterial({ map: blocksBaseColor, normalMap: blocksNormalMap, displacementMap: blocksHeightMap, displacementScale: 0.05, roughnessMap: blocksRoughness, roughness: 0.5, aoMap: blocksAmbientOcclusion }))
box5.geometry.attributes.uv2 = box5.geometry.attributes.uv;
box5.position.y = 3
box5.position.x = 0.8
scene.add(box5)

// DIRECTIONAL LIGHT
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.x += 20
directionalLight.position.y += 20
directionalLight.position.z += 20
scene.add(directionalLight);

// scene.add(new THREE.CameraHelper(directionalLight.shadow.camera));

// ANIMATE
function animate() {
    const time = Date.now() * 0.0005;
    directionalLight.position.x =  Math.sin(time * 0.7) * 20;
    directionalLight.position.z = Math.abs( Math.cos(time * 0.7) ) * 20;

    controls.update();

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
document.body.appendChild(renderer.domElement);
animate();