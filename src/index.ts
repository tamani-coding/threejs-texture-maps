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

const brickWallbasecolor = textureLoader.load("./Brick_Wall_017_basecolor.jpg");
const brickWallnormalMap = textureLoader.load("./Brick_Wall_017_normal.jpg");
const brickWallheightMap = textureLoader.load("./Brick_Wall_017_height.png");
const brickWallroughnessMap = textureLoader.load("./Brick_Wall_017_roughness.jpg");
const brickWallambientOcclusionMap = textureLoader.load("./Brick_Wall_017_ambientOcclusion.jpg");

const stylizedBirckbasecolor = textureLoader.load("./Stylized_Bricks_001_basecolor.jpg");
const stylizedBircknormalMap = textureLoader.load("./Stylized_Bricks_001_normal.jpg");
const stylizedBirckheightMap = textureLoader.load("./Stylized_Bricks_001_height.png");
const stylizedBirckroughnessMap = textureLoader.load("./Stylized_Bricks_001_roughness.jpg");
const stylizedBirckambientOcclusionMap = textureLoader.load("./Stylized_Bricks_001_ambientOcclusion.jpg");

const metalPlatebasecolor = textureLoader.load("./Metal_Plate_047_basecolor.jpg");
const metalPlatenormalMap = textureLoader.load("./Metal_Plate_047_normal.jpg");
const metalPlateheightMap = textureLoader.load("./Metal_Plate_047_height.png");
const metalPlateroughnessMap = textureLoader.load("./Metal_Plate_047_roughness.jpg");
const metalPlateambientOcclusionMap = textureLoader.load("./Metal_Plate_047_ambientOcclusion.jpg");
const metalPlatemetallic = textureLoader.load("./Metal_Plate_047_metallic.jpg");

const rocksHexagonbasecolor = textureLoader.load("./Rocks_Hexagons_001_basecolor.jpg");
const rocksHexagonnormalMap = textureLoader.load("./Rocks_Hexagons_001_normal.jpg");
const rocksHexagonheightMap = textureLoader.load("./Rocks_Hexagons_001_height.png");
const rocksHexagonroughnessMap = textureLoader.load("./Rocks_Hexagons_001_roughness.jpg");
const rocksHexagonambientOcclusionMap = textureLoader.load("./Rocks_Hexagons_001_ambientOcclusion.jpg");

const lavabasecolor = textureLoader.load("./LAVA_005_COLOR.jpg");
const lavanormalMap = textureLoader.load("./LAVA_005_NORM.jpg");
const lavaheightMap = textureLoader.load("./LAVA_005_DISP.png");
const lavaroughnessMap = textureLoader.load("./LAVA_005_ROUGH.jpg");
const lavaambientOcclusionMap = textureLoader.load("./LAVA_005_OCC.jpg");
const lavaemissive = textureLoader.load("./LAVA_005_MASK.jpg");

const metalTilesbasecolor = textureLoader.load("./Metal_Tiles_003_basecolor.jpg");
const metalTilesnormalMap = textureLoader.load("./Metal_Tiles_003_normal.jpg");
const metalTilesheightMap = textureLoader.load("./Metal_Tiles_003_height.png");
const metalTilesroughnessMap = textureLoader.load("./Metal_Tiles_003_roughness.jpg");
const metalTilesambientOcclusionMap = textureLoader.load("./Metal_Tiles_003_ambientOcclusion.jpg");
const metalTilesmetallic = textureLoader.load("./Metal_Tiles_003_metallic.jpg");

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

const box1 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshStandardMaterial({ map: brickWallbasecolor }))
box1.position.y = 3
box1.position.x = -8
scene.add(box1)

const box2 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshStandardMaterial({ map: brickWallbasecolor, normalMap: brickWallnormalMap }))
box2.position.y = 3
box2.position.x = -5.8
scene.add(box2)

const box3 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 512, 512), new THREE.MeshStandardMaterial({ map: brickWallbasecolor, normalMap: brickWallnormalMap, displacementMap: brickWallheightMap, displacementScale: 0.05 }))
box3.position.y = 3
box3.position.x = -3.6
scene.add(box3)

const box4 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 512, 512), new THREE.MeshStandardMaterial({ map: brickWallbasecolor, normalMap: brickWallnormalMap, displacementMap: brickWallheightMap, displacementScale: 0.05, roughnessMap: brickWallroughnessMap, roughness: 0.25  }))
box4.position.y = 3
box4.position.x = -1.4
scene.add(box4)

const box5 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 512, 512), new THREE.MeshStandardMaterial({ map: brickWallbasecolor, normalMap: brickWallnormalMap, displacementMap: brickWallheightMap, displacementScale: 0.05, roughnessMap: brickWallroughnessMap, roughness: 0.25, aoMap: brickWallambientOcclusionMap }))
box5.geometry.attributes.uv2 = box5.geometry.attributes.uv;
box5.position.y = 3
box5.position.x = 0.8
scene.add(box5)

const sphere0 = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 512), new THREE.MeshStandardMaterial({ map: brickWallbasecolor, normalMap: brickWallnormalMap, displacementMap: brickWallheightMap, displacementScale: 0.05, roughnessMap: brickWallroughnessMap, roughness: 0.25, aoMap: brickWallambientOcclusionMap }))
sphere0.geometry.attributes.uv2 = sphere0.geometry.attributes.uv
sphere0.position.y = 3
sphere0.position.x = -4
sphere0.position.z = 3
scene.add(sphere0)

const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 512), new THREE.MeshStandardMaterial({ map: metalTilesbasecolor, normalMap: metalTilesnormalMap, displacementMap: metalTilesheightMap, displacementScale: 0.08, roughnessMap: metalTilesroughnessMap, roughness: 0.5, aoMap: metalTilesambientOcclusionMap, metalnessMap: metalTilesmetallic }))
sphere1.geometry.attributes.uv2 = sphere1.geometry.attributes.uv
sphere1.position.y = 3
sphere1.position.x = 0
sphere1.position.z = 3
scene.add(sphere1)

const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 512), new THREE.MeshStandardMaterial({ map: stylizedBirckbasecolor, normalMap: stylizedBircknormalMap, displacementMap: stylizedBirckheightMap, displacementScale: 0.05, roughnessMap: stylizedBirckroughnessMap, roughness: 0.5, aoMap: stylizedBirckambientOcclusionMap }))
sphere2.geometry.attributes.uv2 = sphere2.geometry.attributes.uv
sphere2.position.y = 3
sphere2.position.x = -4
sphere2.position.z = 6
scene.add(sphere2)

const sphere3 = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 512), new THREE.MeshStandardMaterial({ map: metalPlatebasecolor, normalMap: metalPlatenormalMap, displacementMap: metalPlateheightMap, displacementScale: 0.08, roughnessMap: metalPlateroughnessMap, roughness: 0.5, aoMap: metalPlateambientOcclusionMap, metalnessMap: metalPlatemetallic }))
sphere3.geometry.attributes.uv2 = sphere3.geometry.attributes.uv
sphere3.position.y = 3
sphere3.position.x = 0
sphere3.position.z = 6
scene.add(sphere3)

const sphere4 = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 512), new THREE.MeshStandardMaterial({ map: rocksHexagonbasecolor, normalMap: rocksHexagonnormalMap, displacementMap: rocksHexagonheightMap, displacementScale: 0.1, roughnessMap: rocksHexagonroughnessMap, roughness: 0.8, aoMap: rocksHexagonambientOcclusionMap }))
sphere4.geometry.attributes.uv2 = sphere4.geometry.attributes.uv
sphere4.position.y = 3
sphere4.position.x = -4
sphere4.position.z = 9
scene.add(sphere4)

const sphere5 = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 512), new THREE.MeshStandardMaterial({ color: 0xffff66, map: lavabasecolor, normalMap: lavanormalMap, displacementMap: lavaheightMap, displacementScale: 0.1, roughnessMap: lavaroughnessMap, roughness: 0.8, aoMap: lavaambientOcclusionMap, emissiveMap: lavaemissive }))
sphere5.geometry.attributes.uv2 = sphere5.geometry.attributes.uv
sphere5.position.y = 3
sphere5.position.x = 0
sphere5.position.z = 9
scene.add(sphere5)

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