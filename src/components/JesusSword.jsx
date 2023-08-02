import React, { useRef, useState, useEffect, Suspense  } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { styled } from 'styled-components'
import { Box, useGLTF, Environment, useFBX } from '@react-three/drei'
import * as THREE from 'three';
import { GLTFLoader, FBXLoader  } from 'three-stdlib';
import { easing } from 'maath';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    scroll-snap-align: center;
`

// const SwordGLB = (props) => {
//     const fbx = useFBX("./JesusSwing/SwordAnimated.fbx");
//     const mesh = useRef();
//     const { nodes, materials, scene, animations} = useGLTF('./JesusSwing/MiniJesusSwing.gltf');
//     // const { actions } = useAnimations(animations, scene)

//     const model = useLoader(
//         GLTFLoader2,
//         './JesusSwing/MiniJesusSwing.glb'
//     ) 

//     // Here's the animation part
//     // ************************* 
//     let mixer
//     if (model.animations.length) {
//         mixer = new THREE.AnimationMixer(model.scene);
//         model.animations.forEach(clip => {
//             const action = mixer.clipAction(clip)
//             action.play();
//         });
//     }

//     useFrame((state, delta) => {
//         // mixer?.update(delta)
//     })

//     model.scene.traverse(child => {
//         if (child.isMesh) {
//             child.castShadow = true
//             child.receiveShadow = true
//             child.material.side = THREE.FrontSide
//         }
//     })

//     // return <primitive object={model.scene} scale={props.scale}
//     // />;


//     return (
//         <group {...props} dispose={null}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.mesh_0.geometry}
//           material={materials["Jesus_Swing_5_SwordMad1:MetalBlade"]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.mesh_0_1.geometry}
//           material={materials["Jesus_Swing_5_SwordMad:Icon"]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.mesh_0_2.geometry}
//           material={materials["Jesus_Swing_5_SwordMad:MetalBlade"]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.mesh_0_3.geometry}
//           material={materials["Jesus_Swing_5_SwordMad:Handle"]}
//         />
//       </group>
//     )
// };

const JesusSword = (props) => {
    const mesh = useRef();
    const [dummy] = useState(() => new THREE.Object3D());

    useFrame((state, dt) => {
        mesh.current.position.set(0, 0.4, 0); // Set the pivot position
        mesh.current.updateMatrix(); // not really needed

        // dummy.lookAt(state.pointer.x, state.pointer.y, 1);
        // easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt);
    })

  return (
    <group ref={mesh} {...props} dispose={null}>
        <SwordGLB />
        {/* <JesusSword2 /> */}
        {/* <SwordFBX /> */}

        {/* <HeadPhones scale={[0.06, 0.06, 0.06]} rotation={[0.3, 0, 0]}
            position={[0.1, -1.9, -0.9]} /> */}
        </group>
  )
}

const SwordFBX = (props) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const loader = new FBXLoader();
    loader.load('./JesusSwing/SwordAnimated.fbx', (fbx) => {
      // Add the FBX model to the scene
      scene.add(fbx);

      // Manually animate the objects based on keyframes
      fbx.traverse((child) => {
        if (child.isMesh) {
          const animation = new THREE.AnimationMixer(child);
          const clip = animation.clipAction(fbx.animations[0]);
          clip.play();
        }
      });

      // Render the scene with animation
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();
    });

    camera.position.z = 5;
}


const FBXAnimation = () => {
    const fbxRef = useRef();
    const { nodes, materials, animations } = useFBX('./JesusSwing/SwordAnimated.fbx');
    const { actions } = useAnimations(animations, fbxRef);
  
    return (
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials["Jesus_Swing_5_SwordMad1:MetalBlade"]}
        />
      </Canvas>
    );
  };


  export const JesusSwingFBX = () => {
    const fbx = useFBX("JesusSwing/MiniJesusSwing.fbx");
    const mesh = useRef();

    useFrame((state, dt) => {
        mesh.current.position.set(0, 0.0, 0); // Set the pivot position
        mesh.current.updateMatrix(); // not really needed

        // dummy.lookAt(state.pointer.x, state.pointer.y, 1);
        // easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt);
    })

    return (
        <primitive ref={mesh} object={fbx} scale={1.0} />
    )
};

export default JesusSword