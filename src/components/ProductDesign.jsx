import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import PikaRun from './Models/Pikachu/PikaRun'
import { styled } from 'styled-components'

const Desc = styled.div `
  width: 200px;
  padding: 20px;
  height: 110px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`

const Des2c = styled.div `
  
`

const ProductDesign = () => {
  return (
    <>
    <Canvas camera={{ position: [0.5, 0.2, 1.5], fov: 50 }}>
          <Stage intensity={1} adjustCamera={false}  />
          <ambientLight castShadow />
          <directionalLight position={[-4, 4, 4]} castShadow shadow-mapSize={1024} />
          <PikaRun position={[-0.1, 0.2, 0]} scale={7}/>
          <OrbitControls  autoRotateSpeed={0} rotateSpeed={1} autoRotate={true} enableZoom={false} enableRotate={false} />
    </Canvas>
    <Desc>We design products with a strong focus on both world class design and ensuring your product is a market success.</Desc>
    </>
  )
}

export default ProductDesign
