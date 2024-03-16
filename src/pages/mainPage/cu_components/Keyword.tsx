import * as THREE from "three";
import { Float, useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const START_SCROLL_OFFSET = 0.21;
const END_SCROLL_OFFSET = 0.24;

const Keyword: React.FC = () => {
  const [wasAnimated, setWasAnimated] = useState(false);
  const scroll = useScroll();
  const keyRef = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/cu/key.glb");
  const { actions } = useAnimations(animations, keyRef);
  let mixer = new THREE.AnimationMixer(scene);

  useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.reset();
      action.loop = THREE.LoopOnce;
      action.clampWhenFinished = true;
      action.play();
    });
  }, [scene, actions, wasAnimated]);

  useFrame((state, delta) => {
    if (
      START_SCROLL_OFFSET < scroll.offset &&
      scroll.offset < END_SCROLL_OFFSET
    ) {
      if (!wasAnimated) setWasAnimated(true);
      mixer.update(delta);
    } else if (wasAnimated) setWasAnimated(false);
  });

  return (
    <Float floatIntensity={1} speed={4} rotationIntensity={0.8}>
      <primitive
        ref={keyRef}
        object={scene}
        scale={[1, 1, 1]}
        position={[2, 2, 0]}
      />
    </Float>
  );
};

export default Keyword;
