import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Cube({posSet = [0, 0, 0], rotSet = [0, 0, 0], rotSpeed = [0, 0, 0], scale=[1, 1, 1]}){
    const cube = useRef();
    useFrame(() => {
        cube.current.rotation.x += rotSpeed[0];
        cube.current.rotation.y += rotSpeed[1];
        cube.current.rotation.z += rotSpeed[2];
    });
    return(
        <mesh ref={cube} rotation={rotSet} position={posSet} >
            <boxBufferGeometry args={scale} />
            <meshStandardMaterial color={0xf9f9f9} metalness={0.9} roughness={0.1} />
        </mesh>
    )
}

export default Cube;