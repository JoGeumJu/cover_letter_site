import * as THREE from "three";
import { Float, useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MEONG_EO, MEONG_SO } from "../../../data/scroll_offset";

const Hats: React.FC<{ clickCat: number }> = ({ clickCat }) => {
  const ref = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/meonghae/hats.glb");
  let mixer = useRef<THREE.AnimationMixer>(new THREE.AnimationMixer(scene));
  const scroll = useScroll();

  useEffect(() => {
    console.log(scene);

    console.log(clickCat);
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
    if (MEONG_SO < scroll.offset && scroll.offset < MEONG_EO)
      mixer.current.update(delta);
  });

  return (
    <Float floatIntensity={0.2} speed={4} rotationIntensity={0.2}>
      <primitive object={scene} ref={ref} />
    </Float>
  );
};

export default Hats;
