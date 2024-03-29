import * as THREE from "three";
import { Float, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Fish: React.FC<{ wasAnimated: boolean }> = ({ wasAnimated }) => {
  const ref = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/streetStore/fish.glb");
  const mixer = new THREE.AnimationMixer(scene);

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
    if (wasAnimated) {
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
