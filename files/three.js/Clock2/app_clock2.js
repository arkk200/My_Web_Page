import * as THREE from 'https://cdn.skypack.dev/three@0.140.0'
import threejsOrbitControls from 'https://cdn.skypack.dev/threejs-orbit-controls';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
)
camera.position.z = 60;

// Renderer
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Controls
const controls = new threejsOrbitControls(camera, renderer.domElement);

// Light
const pointLight = new THREE.PointLight(0xdfdfdf, 3);
const ambientLight = new THREE.AmbientLight(0xffffff, 3);
pointLight.position.set(0, 0, 15);
scene.add(pointLight);
scene.add(ambientLight);

// RenderTargetOptions
const renderTargetOptions = {
    format: THREE.RGBAFormat,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter
};

// CubeRenderTarget
const watchRenderTarget1 = new THREE.WebGLCubeRenderTarget(1024, renderTargetOptions);
const borderRenderTarget1 = new THREE.WebGLCubeRenderTarget(1024, renderTargetOptions);

// CubeCamera
const watchCamera1 = new THREE.CubeCamera(0.1, 1000, watchRenderTarget1);
const borderCamera1 = new THREE.CubeCamera(0.1, 1000, borderRenderTarget1);

// Pivot
const watchPivot1 = new THREE.Object3D();
const borderPivot1 = new THREE.Object3D();

// Group
const hourNeedleGroup = new THREE.Group();
const minuteNeedleGroup = new THREE.Group();
const secondNeedleGroup = new THREE.Group();
const sixtyDotGroup = new THREE.Group();

// Geometry
const watchGeo1 = new THREE.CylinderGeometry(10, 11, 1, 40);
const borderGeo1 = new THREE.TorusGeometry(8.75, 0.75, 32, 128);

const hourNeedleBoxGeo = new THREE.BoxGeometry(0.5, 3, 0.25);
const minuteNeedleBoxGeo = new THREE.BoxGeometry(0.5, 4, 0.25);
const secondNeedleBoxGeo = new THREE.BoxGeometry(0.5, 5, 0.25);
const cylinderGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.25, 40);

// Material
const watchMat1 = new THREE.MeshPhongMaterial({
    color:0x2d2d2d,
    envMap: watchRenderTarget1.texture,
    reflectivity: 0.9
});
const borderMat1 = new THREE.MeshPhongMaterial({
    color:0xc0c0c0,
    envMap: borderRenderTarget1.texture,
    reflectivity: 0.9
});
const hourNeedleMat = new THREE.MeshPhongMaterial({color: 0x060606});
const minuteNeedleMat = new THREE.MeshPhongMaterial({color: 0x080808});
const secondNeedleMat = new THREE.MeshPhongMaterial({color: 0x101010});
const sixtyDotMat = new THREE.MeshPhongMaterial({
    color: 0x111111,
    emissive: 0x090909,
    reflectivity: 1
});

// Mesh
const watchMesh1 = new THREE.Mesh(watchGeo1, watchMat1);
const borderMesh1 = new THREE.Mesh(borderGeo1, borderMat1);

const hourNeedleBoxMesh = new THREE.Mesh(hourNeedleBoxGeo, hourNeedleMat);
const hourNeedleTopMesh = new THREE.Mesh(cylinderGeo, hourNeedleMat);
const hourNeedleBottomMesh = new THREE.Mesh(cylinderGeo, hourNeedleMat);

const minuteNeedleBoxMesh = new THREE.Mesh(minuteNeedleBoxGeo, minuteNeedleMat);
const minuteNeedleTopMesh = new THREE.Mesh(cylinderGeo, minuteNeedleMat);
const minuteNeedleBottomMesh = new THREE.Mesh(cylinderGeo, minuteNeedleMat);

const secondNeedleBoxMesh = new THREE.Mesh(secondNeedleBoxGeo, secondNeedleMat);
const secondNeedleTopMesh = new THREE.Mesh(cylinderGeo, secondNeedleMat);
const secondNeedleBottomMesh = new THREE.Mesh(cylinderGeo, secondNeedleMat);

for(let i = 0; i < 60; i++){
    const sixtyDotMesh = new THREE.Mesh(cylinderGeo, sixtyDotMat);
    sixtyDotMesh.rotation.x = Math.PI / 2;
    sixtyDotMesh.position.set(Math.sin(Math.PI / 30 * i)*7.5, Math.cos(Math.PI / 30 * i)*7.5, 10.75);
    if(i%5)sixtyDotMesh.scale.set(0.7, 0.7, 0.7);
    sixtyDotGroup.add(sixtyDotMesh);
}
scene.add(sixtyDotGroup);

hourNeedleTopMesh.rotation.x = Math.PI / 2;
hourNeedleBottomMesh.rotation.x = Math.PI / 2;
hourNeedleGroup.add(hourNeedleBoxMesh);
hourNeedleTopMesh.position.y = 1.5;
hourNeedleGroup.add(hourNeedleTopMesh);
hourNeedleBottomMesh.position.y = -1.5;
hourNeedleGroup.add(hourNeedleBottomMesh);

minuteNeedleTopMesh.rotation.x = Math.PI / 2;
minuteNeedleBottomMesh.rotation.x = Math.PI / 2;
minuteNeedleGroup.add(minuteNeedleBoxMesh);
minuteNeedleTopMesh.position.y = 2;
minuteNeedleGroup.add(minuteNeedleTopMesh);
minuteNeedleBottomMesh.position.y = -2;
minuteNeedleGroup.add(minuteNeedleBottomMesh);

secondNeedleTopMesh.rotation.x = Math.PI / 2;
secondNeedleBottomMesh.rotation.x = Math.PI / 2;
secondNeedleGroup.add(secondNeedleBoxMesh);
secondNeedleTopMesh.position.y = 2.5;
secondNeedleGroup.add(secondNeedleTopMesh);
secondNeedleBottomMesh.position.y = -2.5;
secondNeedleGroup.add(secondNeedleBottomMesh);


watchPivot1.add(watchMesh1);
watchPivot1.add(watchCamera1);
borderPivot1.add(borderMesh1);
borderPivot1.add(borderCamera1);

watchPivot1.position.z = 10;
watchMesh1.rotation.x = Math.PI / 2;
borderPivot1.position.z = 10.3;

hourNeedleGroup.position.set(0, 0, 10.75);
minuteNeedleGroup.position.set(0, 0, 10.76);
secondNeedleGroup.position.set(0, 0, 10.77);

scene.add(watchPivot1);
scene.add(borderPivot1);
scene.add(hourNeedleGroup);
scene.add(minuteNeedleGroup);
scene.add(secondNeedleGroup);

// Resize
window.addEventListener('resize', onResize);

function onResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

let rad = 4;

// Rendering
renderer.setAnimationLoop(animation);

function animation() {
    scene.traverse(obj => {
        if(obj instanceof THREE.Object3D){
            const mesh = obj.children[0];
            const cubeCamera = obj.children[1];
            if(mesh instanceof THREE.Mesh && cubeCamera instanceof THREE.CubeCamera){
                mesh.visible = false;
                cubeCamera.update(renderer, scene);
                mesh.visible = true;
            }
        }
    });
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    let hourAngle = Math.PI / 6 * hour;
    let minuteAngle = Math.PI / 30 * minute;
    let secondAngle = Math.PI / 30 * second;
    hourNeedleGroup.rotation.z = -hourAngle;
    hourNeedleGroup.position.set(Math.sin(hourAngle) * (rad-1), Math.cos(hourAngle) * (rad-1));
    minuteNeedleGroup.rotation.z = -minuteAngle;
    minuteNeedleGroup.position.set(Math.sin(minuteAngle) * (rad-0.5), Math.cos(minuteAngle) * (rad-0.5));
    secondNeedleGroup.rotation.z = -secondAngle;
    secondNeedleGroup.position.set(Math.sin(secondAngle) * rad, Math.cos(secondAngle) * rad);
    renderer.render(scene, camera);
}
// So dirty codeafdsaf