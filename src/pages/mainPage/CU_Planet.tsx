import * as THREE from "three";
import { Float, useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { MeshStandardMaterial } from "three";
import { useFrame } from "@react-three/fiber";

interface CubeProps {
  args: [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const START_SCROLL_OFFSET = 0.21;
const END_SCROLL_OFFSET = 0.24;

const CUPlanet: React.FC<CubeProps> = (props) => {
  const [wasAnimated, setWasAnimated] = useState(false);
  const scroll = useScroll();
  const cuRef = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/cu.glb");
  const { actions } = useAnimations(animations, cuRef);
  let mixer = new THREE.AnimationMixer(scene);

  const findAndApplyMaterial = (object: THREE.Object3D) => {
    if (object instanceof THREE.Mesh && object.name === "glass") {
      const material = object.material as THREE.MeshStandardMaterial;
      material.transparent = true;
      material.opacity = 0.3;
    }
  };

  useEffect(() => {
    scene.children.forEach((child) => {
      findAndApplyMaterial(child);
    });
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

  const handleClick = () => {};
  return (
    <mesh onClick={handleClick}>
      <Float floatIntensity={0.02} speed={4} rotationIntensity={0.02}>
        <primitive ref={cuRef} object={scene} {...props} />;
      </Float>
    </mesh>
  );
};

export default CUPlanet;
