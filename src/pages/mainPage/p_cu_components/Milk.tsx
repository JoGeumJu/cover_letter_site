import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Milk: React.FC<{ wasAnimated: boolean; isScannerOpen: boolean }> = ({
  wasAnimated,
  isScannerOpen,
}) => {
  const ref = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/cu/milk.glb");
  let mixer = new THREE.AnimationMixer(scene);

  useEffect(() => {
    if (wasAnimated) {
      animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.loop = THREE.LoopRepeat;
        action.reset().play();
      });
    }
  }, [wasAnimated, animations, isScannerOpen]);

  useFrame((state, delta) => {
    if (wasAnimated) mixer.update(delta);
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
