/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 MiniJesusSwing.gltf --transform 
Files: MiniJesusSwing.gltf [8.04MB] > MiniJesusSwing-transformed.glb [352.22KB] (96%)
*/

import React, { useRef, useEffect, forwardRef, useImperativeHandle, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import { styled } from 'styled-components'

import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTFLoader } from 'three-stdlib';

const MarioModel = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Models/Mario/MarioPlaying-transformed.glb', null, null, (error) => {
    console.error('Error loading model:', error);
  });
  const { actions, names, mixer } = useAnimations(animations, group)
  
  // const [startAnim, setStartAnim] = useState(true);
  var startAnim = true;
  let time = 0;

  useEffect(() => {
    // actions[names[1]].paused = true;
    actions[names[0]].play();
    actions[names[0]].timeScale = 1;
    // actions[names[0]].setLoop(THREE.LoopOnce, 1);
  }, [])

    useFrame((state) => {
      // const time = state.clock.getElapsedTime();
        time = time + 0.01;

      if (time > .6) {
        // setStartAnim(false);
        // actions[names[0]].timeScale = 0;
      }
    });
    
    
  //   useImperativeHandle(ref, () => ({
  //     playAnim() {
  //       console.log("child function called from parent");
  //       // setEndAnimation(true);
  //       // actions[names[1]].timeScale = 0;
  //       time = 0;
  //       actions[names[0]].timeScale = 1.7;
  //       actions[names[0]].reset();
  //     // actions[names[0]].reset();
  //     // actions[names[0]].time = 2;
  //     // actions[names[1]].paused = true;
  //   }
  // }));

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.Hip_J} />
        </group>
        <group name="mario_model_Good" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh name="Mesh014" geometry={nodes.Mesh014.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh014.skeleton} />
          <skinnedMesh name="Mesh014_1" geometry={nodes.Mesh014_1.geometry} material={materials['EyeLambert.009']} skeleton={nodes.Mesh014_1.skeleton} />
          <skinnedMesh name="Mesh014_2" geometry={nodes.Mesh014_2.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh014_2.skeleton} />
          <skinnedMesh name="Mesh014_3" geometry={nodes.Mesh014_3.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh014_3.skeleton} />
          <skinnedMesh name="Mesh014_4" geometry={nodes.Mesh014_4.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh014_4.skeleton} />
          <skinnedMesh name="Mesh014_5" geometry={nodes.Mesh014_5.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh014_5.skeleton} />
          <skinnedMesh name="Mesh014_6" geometry={nodes.Mesh014_6.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh014_6.skeleton} />
          <skinnedMesh name="Mesh014_7" geometry={nodes.Mesh014_7.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh014_7.skeleton} />
          <skinnedMesh name="Mesh014_8" geometry={nodes.Mesh014_8.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh014_8.skeleton} />
          <skinnedMesh name="Mesh014_9" geometry={nodes.Mesh014_9.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh014_9.skeleton} />
          <skinnedMesh name="Mesh014_10" geometry={nodes.Mesh014_10.geometry} material={materials['EyeLambert.009']} skeleton={nodes.Mesh014_10.skeleton} />
        </group>
      </group>
    </group>
  )
});

const Loading = styled.div`
  color: white;
  font-size: 5rem;
  z-index: 4000;
`

useGLTF.preload('/Models/Mario/MarioPlaying-transformed.glb')

export default MarioModel;