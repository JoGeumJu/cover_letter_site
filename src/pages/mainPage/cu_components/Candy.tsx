import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Candy: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/cu/candy.glb");
  let mixer = new THREE.AnimationMixer(scene);

  useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.clampWhenFinished = true;
      action.play();
    });
  }, [scene, animations]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[0.7, 0.7, 0.7]}
      position={[2, -2, 2]}
    />
  );
};

export default Candy;
