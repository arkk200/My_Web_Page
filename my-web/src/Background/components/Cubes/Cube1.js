import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Cube1(){
    const cube = useRef();
    useFrame(() => {
        cube.current.rotation.x += 0.005;
        cube.current.rotation.y += 0.005;
    });
    return(
        <mesh ref={cube} rotation={[Math.PI / 6, Math.PI / 4, 0]} >
            <boxBufferGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={0xf9f9f9} metalness={0.9} roughness={0.1} />
        </mesh>
    )
}

export default Cube1;