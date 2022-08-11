import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Background() {
    const canvasParents = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#dcdcdc');

        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            10000
        );
        camera.lookAt(0, 0, 0);
        camera.position.set(0, 0, 100);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasParents.current.appendChild(renderer.domElement);

        

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        function animate() {
            requestAnimationFrame(animate);
            
            renderer.render(scene, camera);
        }

        animate();
    }, []);

    return <div id="background" ref={canvasParents}></div>
}

export default Background;