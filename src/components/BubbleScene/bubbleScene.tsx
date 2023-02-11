import { PropsWithChildren, useRef } from "react";
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Bubble from "../Bubble/bubble";

export default function BubbleScene(props: PropsWithChildren) {
    function calculatePosition(bubbleIndex: number): Vector3 {
        const radio = 0.9
        const offsetY = radio / 2;
         
        if(bubbleIndex === 0) return [0, 0, 0];

        if(bubbleIndex === 1) return [0, 1.6, 0];
        return [1.45, 0.8, 0]
    }
    return (
        <div className="canvas" style={{height: '100%'}}>
            <Canvas>
                <ambientLight intensity={0.01} />
                <directionalLight color={'#f3e7d3'} position={[0, 0, 5]} />
                <Bubble img="daiant.jpg" position={calculatePosition(0)}/>
                <Bubble img="angular.png" position={calculatePosition(1)}/>
                <Bubble img="angular.png" position={calculatePosition(2)}/>
                <Bubble img="angular.png" position={calculatePosition(3)}/>
            </Canvas>
        </div>
    )
}
type Vector3 = [number, number, number]