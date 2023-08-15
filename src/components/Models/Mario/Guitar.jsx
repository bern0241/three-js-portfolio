/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 SwordSwing.gltf --transform 
Files: SwordSwing.gltf [13.79MB] > SwordSwing-transformed.glb [599.03KB] (96%)
*/

import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Guitar = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Models/Mario/Guitar-transformed.glb')
  const { actions, names } = useAnimations(animations, group)

  let time = 0;

  useEffect(() => {
    // actions[names[1]].paused = true;
    actions[names[0]].play();
    actions[names[0]].timeScale = 1;
    // actions[names[0]].setLoop(THREE.LoopOnce, 1);
  }, [])

    useFrame((state) => {
        time = time + 0.01;
      if (time > .6) {
        // setStartAnim(false);
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
    <group position={[0, 0, 0.001]} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Les_Paul002" position={[-0.032, 0.022, -0.007]} rotation={[1.895, -1.183, 0.401]} scale={0}>
          <mesh name="Mesh019" geometry={nodes.Mesh019.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh019_1" geometry={nodes.Mesh019_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh019_2" geometry={nodes.Mesh019_2.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh019_3" geometry={nodes.Mesh019_3.geometry} material={materials.PaletteMaterial002} />
          <mesh name="Mesh019_4" geometry={nodes.Mesh019_4.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh019_5" geometry={nodes.Mesh019_5.geometry} material={materials.PaletteMaterial003} />
          <mesh name="Mesh019_6" geometry={nodes.Mesh019_6.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh019_7" geometry={nodes.Mesh019_7.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh019_8" geometry={nodes.Mesh019_8.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh019_9" geometry={nodes.Mesh019_9.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh019_10" geometry={nodes.Mesh019_10.geometry} material={materials.PaletteMaterial001} />
        </group>
      </group>
    </group>
  )
})

useGLTF.preload('/Models/Mario/Guitar-transformed.glb')

export default Guitar;