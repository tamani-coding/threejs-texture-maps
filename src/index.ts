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

const plane1 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshStandardMaterial({ map: brickWallbasecolor }))
plane1.position.y = 3
plane1.position.x = -8
scene.add(plane1)

const plane2 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshStandardMaterial({ map: brickWallbasecolor, normalMap: brickWallnormalMap }))
plane2.position.y = 3
plane2.position.x = -5.8
scene.add(plane2)

const plane3 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 512, 512), new THREE.MeshStandardMaterial({ map: brickWallbasecolor, normalMap: brickWallnormalMap, displacementMap: brickWallheightMap, displacementScale: 0.05 }))
plane3.position.y = 3
plane3.position.x = -3.6
scene.add(plane3)

const plane4 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 512, 512), new THREE.MeshStandardMaterial({ map: brickWallbasecolor, normalMap: brickWallnormalMap, displacementMap: brickWallheightMap, displacementScale: 0.05, roughnessMap: brickWallroughnessMap, roughness: 0.25  }))
plane4.position.y = 3
plane4.position.x = -1.4
scene.add(plane4)

const plane5 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 512, 512), new THREE.MeshStandardMaterial({ map: brickWallbasecolor, normalMap: brickWallnormalMap, displacementMap: brickWallheightMap, displacementScale: 0.05, roughnessMap: brickWallroughnessMap, roughness: 0.25, aoMap: brickWallambientOcclusionMap }))
plane5.geometry.attributes.uv2 = plane5.geometry.attributes.uv;
plane5.position.y = 3
plane5.position.x = 0.8
scene.add(plane5)

const sphere0 = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 512), new THREE.MeshStandardMaterial({ map: brickWallbasecolor, normalMap: brickWallnormalMap, displacementMap: brickWallheightMap, displacementScale: 0.05, roughnessMap: brickWallroughnessMap, roughness: 1, aoMap: brickWallambientOcclusionMap }))
sphere0.geometry.attributes.uv2 = sphere0.geometry.attributes.uv
sphere0.position.y = 3
sphere0.position.x = -4
sphere0.position.z = 3
scene.add(sphere0)

const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 128, {
    format: THREE.RGBFormat,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
    encoding: THREE.sRGBEncoding
} );

const cubeCamera = new THREE.CubeCamera( 1, 10000, cubeRenderTarget );

const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 512), new THREE.MeshStandardMaterial({ map: metalTilesbasecolor, normalMap: metalTilesnormalMap, displacementMap: metalTilesheightMap, displacementScale: 0.08, roughnessMap: metalTilesroughnessMap, roughness: 1, aoMap: metalTilesambientOcclusionMap, metalnessMap: metalTilesmetallic, envMap: cubeRenderTarget.texture }))
sphere1.geometry.attributes.uv2 = sphere1.geometry.attributes.uv
sphere1.position.y = 3
sphere1.position.x = 0
sphere1.position.z = 3
sphere1.add(cubeCamera)
scene.add(sphere1)

const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 512), new THREE.MeshStandardMaterial({ map: stylizedBirckbasecolor, normalMap: stylizedBircknormalMap, displacementMap: stylizedBirckheightMap, displacementScale: 0.05, roughnessMap: stylizedBirckroughnessMap, roughness: 1, aoMap: stylizedBirckambientOcclusionMap }))
sphere2.geometry.attributes.uv2 = sphere2.geometry.attributes.uv
sphere2.position.y = 3
sphere2.position.x = -4
sphere2.position.z = 6
// sphere2.add(cubeCamera)
scene.add(sphere2)

const sphere3 = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 512), new THREE.MeshStandardMaterial({ map: metalPlatebasecolor, normalMap: metalPlatenormalMap, displacementMap: metalPlateheightMap, displacementScale: 0.08, roughnessMap: metalPlateroughnessMap, roughness: 1, aoMap: metalPlateambientOcclusionMap, metalnessMap: metalPlatemetallic }))
sphere3.geometry.attributes.uv2 = sphere3.geometry.attributes.uv
sphere3.position.y = 3
sphere3.position.x = 0
sphere3.position.z = 6
// sphere3.add(cubeCamera)
scene.add(sphere3)

const sphere4 = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 512), new THREE.MeshStandardMaterial({ map: rocksHexagonbasecolor, normalMap: rocksHexagonnormalMap, displacementMap: rocksHexagonheightMap, displacementScale: 0.1, roughnessMap: rocksHexagonroughnessMap, roughness: 1, aoMap: rocksHexagonambientOcclusionMap }))
sphere4.geometry.attributes.uv2 = sphere4.geometry.attributes.uv
sphere4.position.y = 3
sphere4.position.x = -4
sphere4.position.z = 9
// sphere4.add(cubeCamera)
scene.add(sphere4)

const sphere5 = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 512), new THREE.MeshStandardMaterial({ color: 0xffff66, map: lavabasecolor, normalMap: lavanormalMap, displacementMap: lavaheightMap, displacementScale: 0.1, roughnessMap: lavaroughnessMap, roughness: 1, aoMap: lavaambientOcclusionMap, emissiveMap: lavaemissive }))
sphere5.geometry.attributes.uv2 = sphere5.geometry.attributes.uv
sphere5.position.y = 3
sphere5.position.x = 0
sphere5.position.z = 9
// sphere5.add(cubeCamera)
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

    cubeCamera.update( renderer, scene );

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
document.body.appendChild(renderer.domElement);
animate();