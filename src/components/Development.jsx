import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Mario from './Models/Mario/Mario'

const Development = () => {
  return (
    <Canvas camera={{ position: [0.5, 0.0, 1.5], fov: 50 }}>
        {/* <Stage intensity={1} adjustCamera={false}  /> */}
        <ambientLight castShadow />
        <directionalLight position={[-4, 4, 4]} castShadow shadow-mapSize={1024} />
        <Mario position={[0, -0.4, 0]} scale={8}/>
        <OrbitControls autoRotateSpeed={0} rotateSpeed={1} autoRotate={true} enableZoom={false} enableRotate={false} />
    </Canvas>
  )
}

export default Development
