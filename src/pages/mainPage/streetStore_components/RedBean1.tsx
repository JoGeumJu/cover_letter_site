import * as THREE from "three";
import { useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { ST_EO, ST_SO } from "../../../data/scroll_offset";

const RedBean1: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF(
    "/assets/models/streetStore/red_bean1.glb"
  );
  let mixer = new THREE.AnimationMixer(scene);
  const scroll = useScroll();

  useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.loop = THREE.LoopRepeat;
      action.play();
    });
  }, [scene]);

  useFrame((state, delta) => {
    if (ST_SO < scroll.offset && scroll.offset < ST_EO) mixer.update(delta);
  });

  return <primitive ref={ref} object={scene} />;
};

export default RedBean1;
