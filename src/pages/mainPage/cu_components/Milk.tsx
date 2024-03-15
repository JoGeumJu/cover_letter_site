import * as THREE from "three";
import { Float, useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Milk: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/cu/milk.glb");
  const { actions } = useAnimations(animations, ref);
  let mixer = new THREE.AnimationMixer(scene);

  useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.clampWhenFinished = true;
      action.play();
    });
  }, [scene, actions]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  const handleClick = () => {};
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
