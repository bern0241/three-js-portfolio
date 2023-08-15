import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import PikaRun from './Models/Pikachu/PikaRun'

const ProductDesign = () => {
  return (
    <Canvas camera={{ position: [0.5, 0.0, 1.5], fov: 50 }}>
          <Stage intensity={1} adjustCamera={false}  />
          <ambientLight castShadow />
          <directionalLight position={[-4, 4, 4]} castShadow shadow-mapSize={1024} />
          <PikaRun position={[0, -0.4, 0]} scale={7}/>
          <OrbitControls autoRotateSpeed={0} rotateSpeed={1} autoRotate={true} enableZoom={false} enableRotate={false} />
    </Canvas>
  )
}

export default ProductDesign
