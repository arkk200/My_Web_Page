import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import Cube from './components/Cubes/Cube';
import { useState } from 'react';
function Background() {
    const [selectObjects, setSelectObjects] = useState(1);
    setTimeout(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY < window.innerHeight - 2) setSelectObjects(1);
            else if(window.scrollY < window.innerHeight * 3 - 2) setSelectObjects(2);
            else if(window.scrollY < window.innerHeight * 5 - 2) setSelectObjects(3);
            else setSelectObjects(4);
        });
    }, 2000);
    const cube_scales = [
        [2.5, 2.5, 2.5],
        [1.5, 1.5, 1.5],
        [1, 1, 1],
        [1.5, 1.5, 1.5]
    ]
    return (
        <Canvas id="background">
            <OrbitControls />
            <>
                <Cube scale={cube_scales[selectObjects - 1]}
                posSet={
                    selectObjects === 3 ?
                    [-4.1, 0.7, 0]
                    : selectObjects === 4 ?
                    [-3, 0.6, 0]
                    : [0, 0, 0]
                }
                rotSet={[Math.PI / 6, Math.PI / 4, 0]} rotSpeed={[-0.005, 0.005, 0.005]}
                />
                <Cube scale={cube_scales[selectObjects - 1]}
                posSet={
                    selectObjects === 1 ?
                    [-15, 0, 0]
                    : selectObjects === 2 ?
                    [-4, 0, 0]
                    : selectObjects === 3 ?
                    [-4.1, -1, 0]
                    : [0, 0.6, 0]
                } rotSet={[Math.PI / 6, Math.PI / 4, 0]} rotSpeed={[0.005, -0.005, 0.005]}
                />
                <Cube scale={cube_scales[selectObjects - 1]}
                posSet={
                    selectObjects === 1 ?
                    [15, 0, 0]
                    : selectObjects === 2 ?
                    [4, 0, 0]
                    : selectObjects === 3 ?
                    [-4.1, -2.7, 0]
                    : [3, 0.6, 0]
                } rotSet={[Math.PI / 6, Math.PI / 4, 0]} rotSpeed={[0.005, 0.005, -0.005]}
                />
                <Cube scale={cube_scales[selectObjects - 1]}
                posSet={
                    selectObjects === 1 ?
                    [0, -7, 0]
                    : selectObjects === 2 ?
                    [0, -7, 0]
                    : selectObjects === 3 ?
                    [-1.3, 0.7, 0]
                    : [-3, -2, 0]
                } rotSet={[Math.PI / 6, Math.PI / 4, 0]} rotSpeed={[-0.005, -0.005, 0.005]}
                />
                <Cube scale={cube_scales[selectObjects - 1]}
                posSet={
                    selectObjects === 1 ?
                    [0, -7, 0]
                    : selectObjects === 2 ?
                    [0, -7, 0]
                    : selectObjects === 3 ?
                    [-1.3, -1, 0]
                    : [0, -2, 0]
                } rotSet={[Math.PI / 6, Math.PI / 4, 0]} rotSpeed={[-0.005, 0.005, -0.005]}
                />
                <Cube scale={cube_scales[selectObjects - 1]}
                posSet={
                    selectObjects === 1 ?
                    [0, -7, 0]
                    : selectObjects === 2 ?
                    [0, -7, 0]
                    : selectObjects === 3 ?
                    [-1.3, -2.7, 0]
                    : [3, -2, 0]
                } rotSet={[Math.PI / 6, Math.PI / 4, 0]} rotSpeed={[0.005, -0.005, -0.005]}
                />
                <Cube scale={cube_scales[selectObjects - 1]}
                posSet={
                    selectObjects === 1 ?
                    [0, -7, 0]
                    : selectObjects === 2 ?
                    [0, -7, 0]
                    : selectObjects === 3 ?
                    [1.3, 0.7, 0]
                    : [1.3, -7, 0]
                } rotSet={[Math.PI / 6, Math.PI / 4, 0]} rotSpeed={[-0.005, -0.005, -0.005]}
                />
                <Cube scale={cube_scales[selectObjects - 1]}
                posSet={
                    selectObjects === 1 ?
                    [0, -7, 0]
                    : selectObjects === 2 ?
                    [0, -7, 0]
                    : selectObjects === 3 ?
                    [1.3, -1, 0]
                    : [1.3, -7, 0]
                } rotSet={[Math.PI / 6, Math.PI / 4, 0]} rotSpeed={[-0.005, 0.005, 0.005]}
                />
                <Cube scale={cube_scales[selectObjects - 1]}
                posSet={
                    selectObjects === 1 ?
                    [0, -7, 0]
                    : selectObjects === 2 ?
                    [0, -7, 0]
                    : selectObjects === 3 ?
                    [1.3, -2.7, 0]
                    : [1.3, -7, 0]
                } rotSet={[Math.PI / 6, Math.PI / 4, 0]} rotSpeed={[0.005, -0.005, 0.005]}
                />
                <Cube scale={cube_scales[selectObjects - 1]}
                posSet={
                    selectObjects === 1 ?
                    [0, -7, 0]
                    : selectObjects === 2 ?
                    [0, -7, 0]
                    : selectObjects === 3 ?
                    [4.1, 0.7, 0]
                    : [4.1, -7, 0]
                } rotSet={[Math.PI / 6, Math.PI / 4, 0]} rotSpeed={[0.005, 0.005, -0.005]}
                />
                <Cube scale={cube_scales[selectObjects - 1]}
                posSet={
                    selectObjects === 1 ?
                    [0, -7, 0]
                    : selectObjects === 2 ?
                    [0, -7, 0]
                    : selectObjects === 3 ?
                    [4.1, -1, 0]
                    : [4.1, -7, 0]
                } rotSet={[Math.PI / 6, Math.PI / 4, 0]} rotSpeed={[0.005, 0.005, 0.005]}
                />
            </>
            <ambientLight intensity={1} />
            <spotLight position={[-Math.sqrt(2) * 5, 0, Math.sqrt(2) * 5]} />
            <spotLight position={[0, 0, 10]} />
            <spotLight position={[Math.sqrt(2) * 5, 0, Math.sqrt(2) * 5]} />
        </Canvas>
    );
}

export default Background;