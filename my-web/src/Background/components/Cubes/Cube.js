import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Cube({posSet = [0, 0, 0], rotSet = [0, 0, 0], rotSpeed = [0, 0, 0], scale=[1, 1, 1], isTransparent, onClick = () => {}}){
    const cube = useRef();
    setTimeout(() => {
    }, 0);
    useFrame(() => {
        cube.current.rotation.x += rotSpeed[0];
        cube.current.rotation.y += rotSpeed[1];
        cube.current.rotation.z += rotSpeed[2];
        cube.current.position.x += (posSet[0] - cube.current.position.x) * 0.08;
        cube.current.position.y += (posSet[1] - cube.current.position.y) * 0.08;
        cube.current.position.z += (posSet[2] - cube.current.position.z) * 0.08;
        cube.current.scale.x += (scale[0] - cube.current.scale.x) * 0.08;
        cube.current.scale.y += (scale[1] - cube.current.scale.y) * 0.08;
        cube.current.scale.z += (scale[2] - cube.current.scale.z) * 0.08;
        if(isTransparent){
            cube.current.material.opacity += (0.05 - cube.current.material.opacity) * 0.3;
        }
        else
            cube.current.material.opacity += (1 - cube.current.material.opacity) * 0.3;
    });
    return(
        <mesh ref={cube} rotation={rotSet} position={[0, -18, 0]} scale={[0, 0, 0]} onClick={onClick}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={0xf9f9f9} opacity={1} transparent metalness={0.9} roughness={0.1} />
        </mesh>
    )
}

export default Cube;