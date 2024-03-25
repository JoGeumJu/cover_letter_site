import * as THREE from "three";
import { Float, useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MEONG_EO, MEONG_SO } from "../../../data/scroll_offset";

const CatWithFur: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/meonghae/cat.glb");
  let mixer = new THREE.AnimationMixer(scene);
  const scroll = useScroll();

  useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.loop = THREE.LoopRepeat;
      action.reset().play();
    });
  }, [scene]);

  useFrame((state, delta) => {
    if (MEONG_SO < scroll.offset && scroll.offset < MEONG_EO)
      mixer.update(delta);
    if (ref.current) ref.current.rotateY(delta / 2);
  });

  return (
    <Float floatIntensity={0.2} speed={4} rotationIntensity={0.2}>
      <primitive object={scene} ref={ref} />
    </Float>
  );
};

export default CatWithFur;
