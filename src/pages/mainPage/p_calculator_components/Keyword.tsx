import * as THREE from "three";
import { Float, useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { CAL_EO, CAL_SO } from "../../../data/scroll_offset";

const Keyword: React.FC = () => {
  const [wasAnimated, setWasAnimated] = useState(false);
  const scroll = useScroll();
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
    if (CAL_SO < scroll.offset && scroll.offset < CAL_EO) {
      if (!wasAnimated) setWasAnimated(true);
      mixer.update(delta);
    } else if (wasAnimated) setWasAnimated(false);
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
