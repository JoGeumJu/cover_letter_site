import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const RedBean2: React.FC<{ wasAnimated: boolean; isScannerOpen: boolean }> = ({
  wasAnimated,
  isScannerOpen,
}) => {
  const ref = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF(
    "/assets/models/streetStore/red_bean2.glb"
  );
  let mixer = new THREE.AnimationMixer(scene);

  useEffect(() => {
    if (wasAnimated) {
      animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.loop = THREE.LoopRepeat;
        action.reset().setDuration(25).play();
      });
    }
  }, [wasAnimated, animations, isScannerOpen]);

  useFrame((state, delta) => {
    if (wasAnimated) mixer.update(delta);
  });

  return <primitive ref={ref} object={scene} rotation={[0, 0, 0.3]} />;
};

export default RedBean2;
