import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { LoopOnce } from "three";

const START_SCROLL_OFFSET = 0;
const END_SCROLL_OFFSET = 0.1428;

const Box: React.FC = () => {
  const scroll = useScroll();
  const meshRef = useRef<THREE.Mesh>(null);
  const { scene, animations } = useGLTF("/assets/models/heongee.glb");
  const { actions } = useAnimations(animations, meshRef);
  const [readyFlying, setReadyFlying] = useState(false);
  let mixer = new THREE.AnimationMixer(scene);

  const findAndApplyMaterial = (object: THREE.Object3D) => {
    if (object instanceof THREE.Mesh && object.name === "glass001") {
      const material = object.material as THREE.MeshStandardMaterial;
      material.transparent = true;
      material.opacity = 0.3;
    }
  };

  useEffect(() => {
    scene.children.forEach((child) => {
      findAndApplyMaterial(child);
    });
    if (meshRef.current) {
      meshRef.current.position.set(0, 0, -7);
    }
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      if (readyFlying) {
        action.reset();
        action.loop = THREE.LoopOnce;
        action.clampWhenFinished = true;
      } else {
        action.reset();
        action.loop = THREE.LoopRepeat;
      }
      action.play();
    });
  }, [scene, actions, readyFlying]);

  useFrame((state, delta) => {
    if (
      START_SCROLL_OFFSET < scroll.offset &&
      scroll.offset < END_SCROLL_OFFSET
    ) {
      if (!readyFlying) setReadyFlying(true);
      if (meshRef.current) {
        meshRef.current.rotation.y =
          Math.PI * (scroll.offset / END_SCROLL_OFFSET);
        meshRef.current.position.z =
          -7 + 5 * (scroll.offset / END_SCROLL_OFFSET);
        meshRef.current.position.y = -3 * (scroll.offset / END_SCROLL_OFFSET);
      }
    } else if (START_SCROLL_OFFSET == scroll.offset && readyFlying)
      setReadyFlying(false);
    mixer.update(delta);
  });

  return <primitive ref={meshRef} object={scene} scale={[0.5, 0.5, 0.5]} />;
};

export default Box;
