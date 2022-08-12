import { useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Background() {
    const canvasParents = useRef(null);
    const [pageIndex, setPageIndex] = useState(0);
    window.addEventListener('scroll', () => {
        if (window.scrollY < window.innerHeight) setPageIndex(0);
        else if (window.scrollY < window.innerHeight * 3) setPageIndex(1);
        else if (window.scrollY < window.innerHeight * 5) setPageIndex(2);
    });


    // settings
    let scene, camera, renderer;
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color('#dcdcdc');

    camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
    );
    camera.lookAt(0, 0, 0);
    camera.position.set(0, 0, 100);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    setTimeout(() => {
        canvasParents.current.appendChild(renderer.domElement);
    }, 0);

    // controls
    const controls = new OrbitControls(camera, renderer.domElement);
    console.log(controls);

    // resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Mesh functions
    function BoxMesh(pos, size, color, rotate = { x: 0, y: 0, z: 0 }) {
        const boxMesh = new THREE.Mesh(
            new THREE.BoxGeometry(size, size, size),
            new THREE.MeshPhongMaterial({ color })
        );
        boxMesh.position.set(pos.x, pos.y, pos.z);
        boxMesh.rotation.set(rotate.x, rotate.y, rotate.z);
        return boxMesh;
    }
    // function PlaneMesh(pos, size, color, rotate = { x: 0, y: 0, z: 0 }) {
    //     const planeMesh = new THREE.Mesh(
    //         new THREE.PlaneGeometry(size, size),
    //         new THREE.MeshPhongMaterial({ color })
    //     );
    //     planeMesh.position.set(pos.x, pos.y, pos.z);
    //     planeMesh.rotation.set(rotate.x, rotate.y, rotate.z);
    //     return planeMesh;
    // }

    // Meshes
    const box = BoxMesh({ x: 0, y: 0, z: 0 }, 1, 'white', { x: Math.PI / 6, y: Math.PI / 4, z: 0 });
    scene.add(box);

    // const plane = PlaneMesh({ x: 0, y: 0, z: -10 }, 10, 'white', { x: 0, y: 0, z: -Math.PI });
    // scene.add(plane);

    // Lights
    const pl = new THREE.PointLight(0xffffff, 1);
    pl.position.set(0, 0, 10);
    scene.add(pl);

    // Objects states
    const boxStates = [
        {
            pos: {
                x: 0,
                y: 0,
                z: 0
            },
            rot: {
                x: Math.PI / 6,
                y: Math.PI / 4,
                z: 0
            },
            sca: 11
        },
        {
            pos: {
                x: 0,
                y: 0,
                z: 0
            },
            rot: {
                x: Math.PI / 6,
                y: Math.PI / 4,
                z: 0
            },
            sca: 5
        },
        {
            pos: {
                x: 0,
                y: 0,
                z: 0
            },
            rot: {
                x: Math.PI / 6,
                y: Math.PI / 4,
                z: 0
            },
            sca: 10
        },
    ];

    let boxState = boxStates[pageIndex];
    let boxScale = 0;
    let boxRotation = {
        rotX: 0,
        rotY: 0,
        rotZ: 0
    };
    console.log(boxState);
    // animate
    function animate() {
        requestAnimationFrame(animate);
        boxScale += (boxState.sca - box.scale.x) * 0.04;
        box.scale.set(
            boxScale,
            boxScale,
            boxScale,
        );
        renderer.render(scene, camera);
    }
    animate();

    return <div id="background" ref={canvasParents}></div>
}

export default Background;