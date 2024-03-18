import * as THREE from "three";
import { Float, useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { CU_EO, CU_SO } from "../../../data/scroll_offset";
import { MeshStandardMaterial } from "three";

const CU: React.FC = () => {
  const [wasAnimated, setWasAnimated] = useState(false);
  const scroll = useScroll();
  const cuRef = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/cu/cu.glb");
  const mixer = new THREE.AnimationMixer(scene);

  const handleClick = () => {
    if (CU_SO < scroll.offset && scroll.offset < CU_EO) {
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
    if (CU_SO < scroll.offset && scroll.offset < CU_EO) {
      if (!wasAnimated) setWasAnimated(true);
      mixer.update(delta);
    } else if (wasAnimated) setWasAnimated(false);
  });
  return (
    <Float floatIntensity={0.2} speed={4} rotationIntensity={0.2}>
      <primitive ref={cuRef} object={scene} onClick={handleClick} />;
    </Float>
  );
};

export default CU;
