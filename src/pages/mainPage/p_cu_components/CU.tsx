import * as THREE from "three";
import { Float, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";
import { useRecoilValue } from "recoil";
import { moveModeState } from "../../../recoil/globalState";

const CU: React.FC<{ wasAnimated: boolean }> = ({ wasAnimated }) => {
  const moveMode = useRecoilValue(moveModeState);
  const cuRef = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/cu/cu.glb");
  const mixer = new THREE.AnimationMixer(scene);

  const handleClick = () => {
    if (wasAnimated && !moveMode) {
      scene.children.forEach((mesh) => {
        if (mesh.name === "Cube024" || mesh.name === "Cube025") {
          const material = (mesh as THREE.Mesh)
            .material as MeshStandardMaterial;
          material.color.set(material.color.g > 0.5 ? 0x9761e7 : 0xe7e7e7);
        }
      });
    }
  };

  useEffect(() => {
    if (wasAnimated) {
      animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.loop = THREE.LoopOnce;
        action.clampWhenFinished = true;
        action.reset().play();
      });
    }
  }, [scene, wasAnimated, animations]);

  useFrame((state, delta) => {
    if (wasAnimated) mixer.update(delta);
  });

  return (
    <Float floatIntensity={0.2} speed={4} rotationIntensity={0.2}>
      <primitive ref={cuRef} object={scene} onClick={handleClick} />
    </Float>
  );
};

export default CU;
