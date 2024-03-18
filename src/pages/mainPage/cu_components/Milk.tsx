import * as THREE from "three";
import { useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Milk: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/cu/milk.glb");
  let mixer = new THREE.AnimationMixer(scene);

  useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.reset().play();
    });
  }, [scene]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[0.7, 0.7, 0.7]}
      position={[-2, -2, 0]}
    />
  );
};

export default Milk;
