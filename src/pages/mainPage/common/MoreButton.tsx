import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";

const MoreButton: React.FC = () => {
  const scroll = useScroll();
  const meshRef = useRef<THREE.Mesh>(null);
  const { scene, animations } = useGLTF("/assets/models/more.glb");
  const [readyFlying, setReadyFlying] = useState(false);
  let mixer = new THREE.AnimationMixer(scene);

  useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      if (readyFlying) {
        action.reset();
        action.loop = THREE.LoopOnce;
        action.clampWhenFinished = true;
      } else {
        action.reset();
        action.loop = THREE.LoopRepeat;
      }
      action.play();
    });
  }, [scene, readyFlying]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return <primitive ref={meshRef} object={scene} scale={[0.5, 0.5, 0.5]} />;
};

export default MoreButton;
