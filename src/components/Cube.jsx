import React, { useRef } from 'react'
import { OrbitControls, PerspectiveCamera, Text, RenderTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Cube = () => {
    const meshRef = useRef();
    const textRef = useRef();

    useFrame((state) => {
        // console.log("STATE", state);
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) / 5;
        textRef.current.position.x = Math.sin(state.clock.elapsedTime * 2);
    })
  return (
    <mesh ref={meshRef}>
    <boxGeometry />
    <meshStandardMaterial>
        <RenderTexture repeat={true} attach="map">
            <PerspectiveCamera 
                makeDefault
                position={[0, 0, 5]}/>
            <color attach="background" args={["#dc9dcd"]}/>
            <Text ref={textRef} fontSize={1} color="#555">
                Jesus!
            </Text>
        </RenderTexture>
    </meshStandardMaterial>
    </mesh>
  )
}

export default Cube
