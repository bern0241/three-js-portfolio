/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 SwordSwing.gltf --transform 
Files: SwordSwing.gltf [13.79MB] > SwordSwing-transformed.glb [599.03KB] (96%)
*/

import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const SwordSwing = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/../../../public/Models/JesusSwing/Sword-transformed.glb')
  const { actions, names } = useAnimations(animations, group)

  let time = 0;

  useEffect(() => {
    actions[names[0]].play();
    actions[names[0]].timeScale = 1;
  }, [])

    useFrame((state) => {
        time = time + 0.01;
      if (time > .6) {
        // actions[names[0]].timeScale = 0;
      }
    });
    
    
    useImperativeHandle(ref, () => ({
      playAnim() {
        console.log("child function called from parent");
        // time = 0;
        // actions[names[0]].timeScale = 1.7;
        // actions[names[0]].reset();
    }
  }));

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Sword_04" geometry={nodes.Sword_04.geometry} material={materials['blinn1.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
    </group>
  )
})

useGLTF.preload('/../../../public/Models/JesusSwing/Sword-transformed.glb')

export default SwordSwing;