import * as THREE from "three";
import { Float, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Keyword: React.FC<{ wasAnimated: boolean; isScannerOpen: boolean }> = ({
  wasAnimated,
  isScannerOpen,
}) => {
  const keyRef = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/dos/key.glb");
  let mixer = new THREE.AnimationMixer(scene);

  useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.loop = THREE.LoopOnce;
      action.clampWhenFinished = true;
      action.reset().play();
    });
  }, [animations, wasAnimated, isScannerOpen]);

  useFrame((state, delta) => {
    if (wasAnimated) mixer.update(delta);
  });

  return (
    <Float floatIntensity={0.2} speed={4} rotationIntensity={0.2}>
      <primitive
        ref={keyRef}
        object={scene}
        scale={[0.8, 0.8, 0.8]}
        position={[0, 0.5, 0]}
      />
    </Float>
  );
};

export default Keyword;
