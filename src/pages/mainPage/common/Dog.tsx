import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";
import { DOG_EO, DOG_SO } from "../../../data/scroll_offset";

const Dog: React.FC = () => {
  const scroll = useScroll();
  const meshRef = useRef<THREE.Mesh>(null);
  const { scene, animations } = useGLTF("/assets/models/heongee.glb");
  const [readyFlying, setReadyFlying] = useState(false);
  let mixer = new THREE.AnimationMixer(scene);

  const findAndApplyMaterial = (object: THREE.Object3D) => {
    if (object instanceof THREE.Mesh && object.name === "glass001") {
      const material = object.material as THREE.MeshStandardMaterial;
      material.transparent = true;
      material.opacity = 0.2;
    }
  };

  useEffect(() => {
    scene.children.forEach((child) => {
      findAndApplyMaterial(child);
    });
    if (meshRef.current) {
      meshRef.current.position.set(0, 0, -7);
    }
  }, []);

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
  }, [readyFlying, animations]);

  useFrame((state, delta) => {
    if (DOG_SO < scroll.offset && scroll.offset < DOG_EO) {
      if (!readyFlying) setReadyFlying(true);
      if (meshRef.current) {
        meshRef.current.rotation.y = Math.PI * (scroll.offset / DOG_EO);
        meshRef.current.position.z = -7 + 5 * (scroll.offset / DOG_EO);
        meshRef.current.position.y = -3 * (scroll.offset / DOG_EO);
      }
    } else if (DOG_SO >= scroll.offset && readyFlying) setReadyFlying(false);
    mixer.update(delta);
  });

  return <primitive ref={meshRef} object={scene} scale={[0.5, 0.5, 0.5]} />;
};

export default Dog;
