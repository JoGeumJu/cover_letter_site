import * as THREE from "three";
import { Float, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Hats: React.FC<{ clickCat: number }> = ({ clickCat }) => {
  const ref = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/meonghae/hats.glb");
  let mixer = useRef<THREE.AnimationMixer>(new THREE.AnimationMixer(scene));

  useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.current.clipAction(clip);
      action.clampWhenFinished = true;
      action.loop = THREE.LoopOnce;
      action.reset().stop();

      if (clickCat === 1 && clip.name.includes("art")) {
        action.play();
      } else if (clickCat === 2 && clip.name.includes("cap")) {
        action.play();
      } else if (clickCat === 3 && clip.name.includes("magic")) {
        action.play();
      } else if (clickCat === 4 && clip.name.includes("teara")) {
        action.play();
      } else if (clickCat === 0) {
        mixer.current.stopAllAction();
      }
    });
  }, [scene, clickCat]);

  useFrame((state, delta) => {
    mixer.current.update(delta);
  });

  return (
    <Float floatIntensity={0.2} speed={4} rotationIntensity={0.2}>
      <primitive object={scene} ref={ref} />
    </Float>
  );
};

export default Hats;
