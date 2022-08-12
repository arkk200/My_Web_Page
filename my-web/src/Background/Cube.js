import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function Cube() {
    const mesh = useRef();
    const [active, setActive] = useState(false);

    useFrame(() => mesh.current.rotation.x += 0.01);

    return(
        <mesh
            scale={active ? 4 : 2}
            onClick={() => setActive(current => !current)}
            ref={mesh}
        >
            <boxBufferGeometry />
            <meshPhongMaterial color="royalblue" />
        </mesh>
    )
}

export default Cube;