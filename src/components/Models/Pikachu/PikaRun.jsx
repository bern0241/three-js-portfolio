/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 PikaRun.gltf --transform 
Files: PikaRun.gltf [4.8MB] > PikaRun-transformed.glb [371.71KB] (92%)
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function PikaRun(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/../../../public/Models/Pikachu/PikaRun-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.Core} />
        </group>
        <group name="PikachuMesh" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh.skeleton} />
          <skinnedMesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh_1.skeleton} />
          <skinnedMesh name="Mesh_2" geometry={nodes.Mesh_2.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh_2.skeleton} />
          <skinnedMesh name="Mesh_3" geometry={nodes.Mesh_3.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh_3.skeleton} />
          <skinnedMesh name="Mesh_4" geometry={nodes.Mesh_4.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh_4.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/PikaRun-transformed.glb')
