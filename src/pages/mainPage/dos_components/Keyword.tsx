import * as THREE from "three";
import { Float, useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { DOS_EO, DOS_SO } from "../../../data/scroll_offset";

const Keyword: React.FC = () => {
  const [wasAnimated, setWasAnimated] = useState(false);
  const scroll = useScroll();
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
  }, [scene, wasAnimated]);

  useFrame((state, delta) => {
    if (DOS_SO < scroll.offset && scroll.offset < DOS_EO) {
      if (!wasAnimated) setWasAnimated(true);
      mixer.update(delta);
    } else if (wasAnimated) setWasAnimated(false);
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
