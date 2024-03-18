import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

interface CubeProps {
  args: [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const Planet: React.FC<CubeProps> = (props) => {
  const gltf = useGLTF("/assets/models/cube.glb");
  let mixer = new THREE.AnimationMixer(gltf.scene);
  useEffect(() => {
    gltf.animations.forEach((clip) => {
      if (clip.name !== "parentsAction") {
        const action = mixer.clipAction(clip);
        action.loop = THREE.LoopPingPong;
        action.play();
      }
    });
  }, [gltf]);
  useFrame((state, delta) => {
    mixer.update(delta);
  });
  return (
    <mesh>
      <primitive object={gltf.scene} {...props} />
    </mesh>
  );
};

export default Planet;
