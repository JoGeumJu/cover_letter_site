import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useGLTF, useScroll } from "@react-three/drei";
import { DOG_EO, DOG_SO } from "../../../data/scroll_offset";
import { useRecoilValue } from "recoil";
import { isScannerOpenState } from "../../../recoil/globalState";

const Dog: React.FC = () => {
  const scroll = useScroll();
  const meshRef = useRef<THREE.Mesh>(null);
  const isScannerOpen = useRecoilValue(isScannerOpenState);
  const { scene, animations } = useGLTF("/assets/models/heongee.glb");
  const [readyFlying, setReadyFlying] = useState(true);
  let mixer = new THREE.AnimationMixer(scene);

  const findAndApplyMaterial = (object: THREE.Object3D) => {
    if (object instanceof THREE.Mesh && object.name === "glass001") {
      const material = object.material as THREE.MeshStandardMaterial;
      material.transparent = true;
      material.opacity = 0.2;
    }
  };

  useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      if (readyFlying) {
        action.loop = THREE.LoopOnce;
        action.clampWhenFinished = true;
      } else {
        action.loop = THREE.LoopRepeat;
      }
      action.reset().play();
    });
  }, [readyFlying, animations, isScannerOpen]);

  useEffect(() => {
    scene.children.forEach((child) => {
      findAndApplyMaterial(child);
    });
    if (meshRef.current) {
      if (scroll.offset >= DOG_EO) {
        meshRef.current.position.set(0, -3, -2);
      } else {
        meshRef.current.position.set(0, 0, -7);
        meshRef.current.rotation.set(0, Math.PI * 2, 0);
      }
    }
  }, [scene]);

  useFrame((state, delta) => {
    if (DOG_SO < scroll.offset) {
      if (!readyFlying) setReadyFlying(true);
      if (meshRef.current) {
        meshRef.current.rotation.y = Math.PI * scroll.range(DOG_SO, DOG_EO);
        meshRef.current.position.z = -7 + 5 * scroll.range(DOG_SO, DOG_EO);
        meshRef.current.position.y = -3 * scroll.range(DOG_SO, DOG_EO);
      }
    } else if (DOG_SO === scroll.offset && readyFlying) {
      setReadyFlying(false);
    }
    mixer.update(delta);
  });

  return (
    <Float floatIntensity={0.1} speed={4} rotationIntensity={0.1}>
      <primitive ref={meshRef} object={scene} scale={[0.5, 0.5, 0.5]} />
    </Float>
  );
};

export default Dog;
