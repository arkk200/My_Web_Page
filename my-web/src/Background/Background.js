import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei'
import Cube1 from './components/Cubes/Cube1';
function Background() {
    
    return (
    <Canvas id="background">
        <OrbitControls />
        <Cube1 />
        <ambientLight intensity={1} />
        <spotLight position={[-Math.sqrt(2)*5, 0, Math.sqrt(2)*5]} />
        <spotLight position={[0, 0, 10]} />
        <spotLight position={[Math.sqrt(2)*5, 0, Math.sqrt(2)*5]} />
    </Canvas>
    );
}

export default Background;