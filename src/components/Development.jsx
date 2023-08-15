import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Mario from './Models/Mario/Mario'
import { styled } from 'styled-components'

const Desc = styled.div `
  width: 200px;
  padding: 20px;
  height: 110px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`

const Development = () => {
  return (
    <>
    <Canvas camera={{ position: [0.5, 0.0, 1.5], fov: 50 }}>
        {/* <Stage intensity={1} adjustCamera={false}  /> */}
        <ambientLight castShadow />
        <directionalLight position={[-4, 4, 4]} castShadow shadow-mapSize={1024} />
        <Mario position={[0, -0.35, 0]} scale={8}/>
        <OrbitControls autoRotateSpeed={0} rotateSpeed={1} autoRotate={true} enableZoom={false} enableRotate={false} />
    </Canvas>
    <Desc>We design products with a strong focus on both world class design and ensuring your product is a market success.</Desc>
    </>
  )
}

export default Development
