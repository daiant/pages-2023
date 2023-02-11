import { useLoader, useFrame } from '@react-three/fiber';
import { Props, ThreeEvent } from '@react-three/fiber/dist/declarations/src';
import { useRef, useState } from 'react';
import { Mesh, TextureLoader } from 'three';

export default function Bubble(props: {img: string, position: [number, number, number]}) {
    const [captured, setCaptured] = useState(false);
    const WIDTH = 302;
    const HEIGHT = 150;

    const colorMap = useLoader(TextureLoader, props.img);
    const mesh = useRef<Mesh>(null);

    useFrame(({ clock }) => {
        if (mesh.current) {
            // if (mesh.current.position.z < 0) mesh.current.position.z += 1;
            // if(mesh.current.position.z >= 0) mesh.current.position.x += 0.01
        }
    });
    function getCoordinates(clientX: number, clientY: number): [number, number] {

        return [
            (((clientX - 16) / WIDTH) * 2) - 1
            , 
            (((clientY - 267.1875) / HEIGHT) * 2) - 1
        ]
    }
    function handleMovement(e: ThreeEvent<PointerEvent>): void {
        if(!captured || !mesh.current) return;
        const coordinates = getCoordinates(e.clientX, e.clientY);
        // mesh.current.position.x = coordinates[0];
        // mesh.current.position.y = coordinates[1];
    }
    return <>
        <mesh ref={mesh} position={props.position}
            onPointerDown={() => setCaptured(true)}
            onPointerMove={handleMovement}
            onPointerUp={() => setCaptured(false)}
        >
            <circleGeometry args={[0.8]} onUpdate={geometry => {geometry.center()}}/>
            <meshStandardMaterial map={colorMap} />
            <texture args={[]} />
        </mesh>
    </>
}