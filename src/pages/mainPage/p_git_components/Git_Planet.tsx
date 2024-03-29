import { Float, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import * as THREE from "three";
import { GIT_SO } from "../../../data/scroll_offset";
import { moveModeState } from "../../../recoil/globalState";

const GitPlanet: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const [wasAnimated, setWasAnimated] = useState(false);
  const { scene, animations } = useGLTF("/assets/models/git/git.glb");
  let mixer = new THREE.AnimationMixer(scene);
  const scroll = useScroll();
  const moveMode = useRecoilValue(moveModeState);

  useEffect(() => {
    if (wasAnimated) {
      animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.loop = THREE.LoopRepeat;
        action.reset().play();
      });
    }
  }, [wasAnimated, animations]);

  useFrame((state, delta) => {
    if (GIT_SO < scroll.offset) {
      if (!wasAnimated) setWasAnimated(true);
      mixer.update(delta);
    } else if (wasAnimated) setWasAnimated(false);
  });

  return (
    <mesh
      position={[-0.7, 1.5, -1008]}
      rotation={[0, 0, 0]}
      onClick={() => {
        if (!moveMode && scroll.offset > 0.98)
          window.open("https://github.com/JoGeumJu?tab=stars", "_blank");
      }}
    >
      <Float floatIntensity={0.2} speed={4} rotationIntensity={0.2}>
        <primitive ref={ref} object={scene} />
      </Float>
    </mesh>
  );
};

export default GitPlanet;
