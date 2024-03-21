import * as THREE from "three";
import { Float, useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { GIT_SO } from "../../../data/scroll_offset";

const Picture: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/git/picture.glb");
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
    if (GIT_SO < scroll.offset) mixer.update(delta);
  });

  return <primitive object={scene} ref={ref} />;
};

export default Picture;
