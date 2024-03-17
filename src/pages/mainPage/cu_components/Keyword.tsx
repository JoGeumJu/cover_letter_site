import * as THREE from "three";
import { Float, useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { CU_EO, CU_SO } from "../../../data/scroll_offset";

const Keyword: React.FC = () => {
  const [wasAnimated, setWasAnimated] = useState(false);
  const scroll = useScroll();
  const keyRef = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/cu/key.glb");
  let mixer = new THREE.AnimationMixer(scene);

  useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.reset();
      action.loop = THREE.LoopOnce;
      action.clampWhenFinished = true;
      action.play();
    });
  }, [scene, wasAnimated]);

  useFrame((state, delta) => {
    if (CU_SO < scroll.offset && scroll.offset < CU_EO) {
      if (!wasAnimated) setWasAnimated(true);
      mixer.update(delta);
    } else if (wasAnimated) setWasAnimated(false);
  });

  return (
    <Float floatIntensity={0.6} speed={4} rotationIntensity={0.4}>
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
