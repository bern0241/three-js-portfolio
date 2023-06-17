import React, { useEffect } from 'react'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { styled } from 'styled-components'
import Cube from './Cube'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
`
function Test2() {

  return (
    <Container>
        <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1}/>
            <directionalLight position={[1, 2, 3]} />
            <Cube />
        </Canvas>
    </Container>
  )
}


export default Test2
