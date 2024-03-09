import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame, ThreeElements, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

type BoxProps = ThreeElements["mesh"];

const Box: React.FC<BoxProps> = (props) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const gltf = useGLTF("/assets/models/heongee_test2.glb");

  useEffect(() => {
    const findAndApplyMaterial = (object: THREE.Object3D) => {
      if (object instanceof THREE.Mesh && object.name === "glass") {
        const material = object.material as THREE.MeshStandardMaterial;
        material.transparent = true;
        material.opacity = 0.3;
      }
      object.children.forEach((child) => {
        findAndApplyMaterial(child);
      });
    };
    gltf.scene.children.forEach((child) => {
      findAndApplyMaterial(child);
    });
  }, [gltf]);

  // useFrame((state, delta) => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += delta / 10;
  //     meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime) * 0.1;
  //   }
  // });

  return (
    <primitive ref={meshRef} object={gltf.scene} scale={[0.5, 0.5, 0.5]} />
  );
};

export default Box;
