import React from 'react'
import { styled } from 'styled-components'
import Cube from './Cube'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  // height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`



const Left = styled.div`
  flex: 1;
`
const Title = styled.h1`
  font-size: 74px;
  margin: 0;
`



const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Line = styled.img`
  height: 5px;
`

const Subtitle = styled.h2`
  color: #da4ea2;
`

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  margin: 0;
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 160px;
  height: 50px;
  padding: 10x;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
`


const Who = () => {
  return (
    <Section>
        <Container>
            <Left>
                <Canvas camera={{fov: 25, position: [5, 5, 5]}}>
                    <Cube />
                     <OrbitControls enablePan={false} autoRotate enableZoom={false} />
                    <ambientLight intensity={1}/>
                    <directionalLight position={[1, 2, 3]} />
                </Canvas>
            </Left>
            <Right> 
              <Title>Think outside the square space</Title>
              <WhatWeDo>
                  <Line src="./img/line.png"/>
                  <Subtitle>What we Do</Subtitle>
              </WhatWeDo>
              <Desc>A creative group of designers and developers with a passion for the arts.</Desc>
              <Button>See Our Works</Button>
            </Right>
        </Container>
    </Section>
  )
}

export default Who
