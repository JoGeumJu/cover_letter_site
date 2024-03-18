import * as THREE from "three";
import { Float, useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ST_EO, ST_SO } from "../../../data/scroll_offset";

const Fish: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/streetStore/fish.glb");
  const mixer = new THREE.AnimationMixer(scene);
  const scroll = useScroll();
  const mouse = new THREE.Vector2();

  useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.loop = THREE.LoopRepeat;
      action.play();
    });
  }, [scene, animations]);

  useFrame((state, delta) => {
    if (ST_SO < scroll.offset && scroll.offset < ST_EO) {
      const targetRotationX = -state.mouse.y / 3;
      const targetRotationY = state.mouse.x / 3;
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        targetRotationX,
        0.03
      );
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        targetRotationY,
        0.03
      );
      mixer.update(delta);
    }
  });

  return (
    <Float floatIntensity={0.2} speed={4} rotationIntensity={0.2}>
      <primitive ref={ref} object={scene} />
    </Float>
  );
};

export default Fish;
