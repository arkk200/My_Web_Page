import * as THREE from 'https://cdn.skypack.dev/three@0.140.0';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);
camera.position.set(2, 0, 7);
camera.rotation.y = Math.PI / 180 * 30;

const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

const al = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(al);

const bP = './contents_images/three.js/three.js_';
const images = [
    `${bP}Clock1.png`,
    `${bP}Clock2.png`,
    `${bP}Mirror1.png`,
    `${bP}Mirror2.png`,
    `${bP}Yacht_Dice.png`,
    `${bP}Skybox.png`,
    `./images/web_page_images/Logo.png`,
    `./images/web_page_images/Logo.png`
];

let planeGroup;
insertTexture();
function insertTexture(){
    planeGroup = new THREE.Group();
    for(let i = 0; i < 8; i++) {
        const texture = new THREE.TextureLoader().load(images[i]);
        const planeMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 1.6875),
            new THREE.MeshBasicMaterial({
                color: 0xffffff,
                map:texture,
                side:THREE.DoubleSide
            })
        );
        planeMesh.position.y = Math.sin(Math.PI / 180 * -i * 45) * 2;
        planeMesh.position.z = Math.cos(Math.PI / 180 * -i * 45) * 2;
        planeGroup.add(planeMesh);
    }

    scene.add(planeGroup);
}

window.addEventListener('scroll', () => {
    for(let i = 0; i < 8; i++){
        planeGroup.children[i].position.y = Math.sin(Math.PI / 180 * -i * 45 + scrollY / 2286.4 * 44 / 7) * 2;
        planeGroup.children[i].position.z = Math.cos(Math.PI / 180 * -i * 45 + scrollY / 2286.4 * 44 / 7) * 2;
    }
});

function onResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onResize);

renderer.setAnimationLoop(animate);

let isTHRClicked = true;
let iTCPosSet = false;
let isATWClicked = false;
let iACPosSet = false;
let isETCClicked = false;
let iECPosSet = false;

let moveSpeed = 0.18;

function animate(){
    if(isTHRClicked){
        if(iTCPosSet) {
            iTCPosSet = false;
            planeGroup.position.set(0, 0, 0);
            camera.position.set(2, 0, 7);
            moveSpeed = 0.18;
        }
        camera.position.z += moveSpeed;
        moveSpeed *= 0.96;
    } else if(isATWClicked){
        if(iACPosSet) {
            iACPosSet = false;
            planeGroup.position.set(0, 0, 0);
            moveSpeed = 0.006;
        }
        planeGroup.position.x += moveSpeed;
        moveSpeed *= 1.07;
        if(moveSpeed > 4) moveSpeed = 0;
    } else if(isETCClicked){
        if(iECPosSet) {
            iECPosSet = false;
            planeGroup.position.set(0, 0, 0);
            camera.position.set(2, 0, 7);
            moveSpeed = 0.18;
        }
        camera.position.z += moveSpeed;
        moveSpeed *= 0.96;
    }
    renderer.render(scene, camera);
}

const $three_js = document.querySelector('#three-js button');
const $web_introduce = document.querySelector('#web-introduce button');
const $etc = document.querySelector('#etc button');

$three_js.addEventListener('click', ()=>{
    isTHRClicked = true;
    isATWClicked = false;
    isETCClicked = false;
    iTCPosSet = true;
});
$web_introduce.addEventListener('click', ()=>{
    isTHRClicked = false;
    isATWClicked = true;
    isETCClicked = false;
    iACPosSet = true;
});
$etc.addEventListener('click', ()=>{
    isTHRClicked = false;
    isATWClicked = false;
    isETCClicked = true;
    iECPosSet = true;
});