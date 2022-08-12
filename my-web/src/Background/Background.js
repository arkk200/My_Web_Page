import {Canvas} from '@react-three/fiber';
import Cube from './Cube';
function Background() {
    
    return (
    <Canvas id="background">
        <ambientLight intensity={0.1} />
        <directionalLight />
        <Cube />
    </Canvas>
    );
}

export default Background;