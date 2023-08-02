import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { useState, useRef } from 'react'
import { styled } from 'styled-components'
import { Box, useGLTF, Environment, useFBX } from '@react-three/drei'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { easing } from 'maath';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader  } from 'three-stdlib';
//meshes
// import JesusSword, { JesusSwingFBX } from './JesusSword';
import MiniJesusSwing from './Models/MiniJesusSwing';
import SwordSwing from './Models/SwordSwing';
import MiniJesus from './Models/MiniJesus';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    scroll-snap-align: center;
`

const HelloKittyFBX = () => {
    const fbx = useFBX("joy.fbx");
    const mesh = useRef();
    const [dummy] = useState(() => new THREE.Object3D());

    useFrame((state, dt) => {
        mesh.current.position.set(0, 0.4, 0); // Set the pivot position
        mesh.current.updateMatrix(); // not really needed

        dummy.lookAt(state.pointer.x, state.pointer.y, 1);
        easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt);
    })

    return (
        <primitive ref={mesh} object={fbx} scale={0.01} />
    )
};

const Test = () => {
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false)

  return (
    <Container>
        {/* <Canvas camera={{ position: [1, -4, 2.5] }}> */}
        {/* <Canvas camera={{ position: [1, -4, 2.5] }}> */}
        <Canvas camera={{ position: [0.5, 0.5, 1.5], fov: 50 }}>
            <OrbitControls enableZoom={false} />
            {/* <mesh rotation={[10, 10, 10]} 
                onPointerOver={(e) => setHover(true)}
                onPointerOut={(e) => setHover(false)}
                onClick={(e) => setActive(!active)}
            > 
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial color={active ? (hovered ? 'hotpink' : 'orange') : 'red'}/>
            </mesh>
            <mesh position={[0, 0, -0.5]}>
                <planeGeometry args={[5, 5, 64, 64]} />
            </mesh>
            <pointLight position={[5, 5, 5]}/>
            <ambientLight /> */}
            {/* <Box2 /> */}
            {/* <Scene />
             */}
            <ambientLight castShadow />
              <directionalLight position={[-4, 4, 4]} castShadow shadow-mapSize={1024} />
             <mesh  position={[0, 0, -0.5]}>
                {/* <planeGeometry args={[5, 5, 64, 64]} /> */}
                {/* <primitive object={gltf.scene} /> */}
                {/* <boxGeometry /> */}
                {/* <meshNormalMaterial /> */}
            </mesh>

            {/* <AlembicModel /> */}
            {/* <HelloKittyFBX /> */}

            {/* <JustinHeadPhones /> */}
            {/* <JesusSword /> */}
            {/* <JesusSwingFBX />
             */}
             {/* <group position={[0, -0.4, 0]}>
              <MiniJesusSwing />
              <SwordSwing />
             </group> */}

             <MiniJesus position={[0, -0.4, 0]} scale={7}/>

             <mesh rotation={[-1.57, 0, 0]} position={[0, -.4, 0]} receiveShadow>
              <planeBufferGeometry args={[2, 2, 1, 1]} />
              < meshStandardMaterial />
            </mesh>
            
            {/* <Environment preset='sunset' background/> */}

        </Canvas>
    </Container>
  )
}

const Scene = () => {
    const { camera } = useThree();
    const planeMesh = useRef();

    //initialize rotation
    camera.position.z = 2.5;
    camera.position.y = -4;
    camera.rotation.x = 1;

    useFrame(() => {
        if (planeMesh.current) {
            // planeMesh.current.rotation.z -= 0.001;
        }
    })

    return (
        <>
            {/* Scene Components */}
            <ambientLight intensity={1}/>
            <pointLight position={[5, 5, 5]}/>
            <Box2 />
            <mesh ref={planeMesh} position={[0, 0, -0.5]}>
                <planeGeometry args={[5, 5, 64, 64]} />
            </mesh>
        </>
    )
}


function JustinHead2(props) {
    const mesh = useRef();
    const { nodes, materials } = useGLTF('/myHead.glb');
    const [dummy] = useState(() => new THREE.Object3D());

    return (
        <group ref={mesh} {...props} dispose={null}>
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Group1.geometry}
                material={materials["default"]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
                >
                    <meshNormalMaterial />
                </mesh>
        </group>
    )
}

// function AlembicModel({ path }) {
//   const gltf = useLoader(GLTFLoader, "/flag.abc");
  
//   return <primitive object={gltf.scene} />;
// }

function HeadPhones(props) {
    const { nodes, materials } = useGLTF("/headphones_free.glb");
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              position={[735.89, 495.83, 692.58]}
              rotation={[Math.PI, 0.76, 2.68]}
              scale={100}
            />
            <group
              position={[407.62, 590.39, -100.55]}
              rotation={[1.89, 0.88, -2.05]}
              scale={100}
            >
              <group rotation={[Math.PI / 2, 0, 0]} />
            </group>
            <group
              position={[-0.55, 7.5, 20.09]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["003_headfones_low_DefaultMaterial_0"].geometry}
                material={materials.DefaultMaterial}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["001_headfones_low_DefaultMaterial_0"].geometry}
                material={materials.DefaultMaterial}
              />
            </group>
            <group
              position={[-0.55, 7.5, 20.09]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["002_headfones_low_DefaultMaterial_0"].geometry}
                material={materials.DefaultMaterial}
              />
            </group>
          </group>
        </group>
      </group>
    );
  }

const JustinHeadPhones = (props) => {
    const mesh = useRef();
    const [dummy] = useState(() => new THREE.Object3D());

    useFrame((state, dt) => {
        mesh.current.position.set(0, 0.4, 0); // Set the pivot position
        mesh.current.updateMatrix(); // not really needed

        dummy.lookAt(state.pointer.x, state.pointer.y, 1);
        easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt);
    })

    return (
        <group ref={mesh} {...props} dispose={null}>
        <JustinHead2 />
        <HeadPhones scale={[0.06, 0.06, 0.06]} rotation={[0.3, 0, 0]}
            position={[0.1, -1.9, -0.9]} />
        </group>
    )
}

export default Test
