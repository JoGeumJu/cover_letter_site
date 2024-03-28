import * as THREE from "three";
import { Float, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { CAL_EO, CAL_SO } from "../../../data/scroll_offset";

const Keyword: React.FC<{ wasAnimated: boolean }> = ({ wasAnimated }) => {
  const keyRef = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/calculator/key.glb");
  let mixer = new THREE.AnimationMixer(scene);

  useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.loop = THREE.LoopOnce;
      action.clampWhenFinished = true;
      action.setEffectiveTimeScale(1.2);
      action.reset().play();
    });
  }, [scene, wasAnimated]);

  useFrame((state, delta) => {
    if (wasAnimated) mixer.update(delta);
  });

  return (
    <Float floatIntensity={0.2} speed={4} rotationIntensity={0.2}>
      <primitive
        ref={keyRef}
        object={scene}
        scale={[0.6, 0.6, 0.6]}
        position={[0.1, 0.4, 0]}
        rotation={[-0.2, -0.2, 0]}
      />
    </Float>
  );
};

export default Keyword;
