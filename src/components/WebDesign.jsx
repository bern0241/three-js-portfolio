import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import MiniJesus from './Models/Jesus/MiniJesus'
import { styled } from 'styled-components'

const WebDesign = () => {
  return (
    <Canvas camera={{ position: [0.5, 0.0, 1.5], fov: 50 }}>
          <Stage intensity={1} adjustCamera={false}  />
          <ambientLight castShadow />
          <directionalLight position={[-4, 4, 4]} castShadow shadow-mapSize={1024} />
          <MiniJesus position={[0, -0.4, 0]} scale={7}/>
          <OrbitControls autoRotateSpeed={0} rotateSpeed={1} autoRotate={true} enableZoom={false} enableRotate={false} />
    </Canvas>
  )
}


function Loader() {
  const { progress } = useProgress()
  return <Html color='white' center>{progress} % loaded</Html>
}

const Loading = styled.div`
  color: white;
  background-color: red;
  font-size: 51rem;
  height: 100vh;
  width: 100vw;
`

export default WebDesign
