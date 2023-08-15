import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar'
import Cube from './Cube'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Canvas, useLoader  } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Box } from '@react-three/drei'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`
const Title = styled.h1`
  font-size: 74px;
  margin: 0;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
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
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 130px;
  height: 50px;
  padding: 10x;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
`



const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate; //turns back

  @media only screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @keyframes animate {
    from { //DONT NEED
    }
    to {         //or 100%
      transform: translateY(20px);
    }
  }
`

const Hero = () => {
  const colorMap = useLoader(TextureLoader, 'jesus.jpg')

  return (
    <Section>
        <Navbar />
        <Container>
            <Left>
              <Title>Think. Make. Solve.</Title>
              <WhatWeDo>
                  <Line src="./img/line.png"/>
                  <Subtitle>What we Do</Subtitle>
              </WhatWeDo>
              <Desc>We enjoy creating delightful, human-centered digital experiences.</Desc>
              <Button>Learn More</Button>
            </Left>
            <Right> 
                <Canvas>
                    <OrbitControls enablePan={false} enableZoom={false} />
                    <ambientLight intensity={1}/>
                    <directionalLight position={[1, 2, 3]} />
                    <Sphere args={[1, 100, 200]} scale={2.4} >
                        <MeshDistortMaterial attach="material" distort={0.5} speed={2} color="#3d1c56"/>
                              {/* <meshStandardMaterial color="#3d1c56" attach="material" map={colorMap} /> */}
                    </Sphere>
                    {/* <mesh>
                      <sphereGeometry />
                      <meshStandardMaterial map={colorMap} />
                    </mesh> */}
                </Canvas>
                <Img src="./img/moon.png"/>
            </Right>
        </Container>
    </Section>
  )
}

export default Hero
